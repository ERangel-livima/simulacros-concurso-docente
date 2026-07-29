(function(){
  const appEl = document.getElementById('app');

  window.addEventListener('error', function(e){
    if(appEl && !appEl.innerHTML.trim()){
      appEl.innerHTML = '<div class="wrap narrow" style="padding-top:3.5rem;"><div class="eyebrow">Ocurrió un error</div><h1 style="font-size:22px;margin:.5rem 0 1rem;">La página no pudo cargar</h1><div class="auth-card"><p style="font-size:13px;color:var(--coral);">'+(e.message||'Error desconocido')+'</p></div></div>';
    }
  });

  function showSetupScreen(problems){
    appEl.innerHTML = `
    <div class="wrap narrow" style="padding-top:3.5rem;">
      <div class="eyebrow">Falta un paso de configuración</div>
      <h1 style="font-size:24px;margin:.5rem 0 1rem;">La plataforma aún no está lista</h1>
      <div class="auth-card">
        <p style="font-size:14px;color:var(--ink-soft);margin-top:0;">Se encontraron los siguientes problemas:</p>
        <ul style="font-size:14px;color:var(--coral);padding-left:1.2rem;line-height:1.7;">
          ${problems.map(p=>`<li>${p}</li>`).join('')}
        </ul>
        <p style="font-size:13px;color:var(--ink-soft);">Revisa el archivo <code>README.md</code>: primero se crea el proyecto en Supabase y se ejecuta <code>schema.sql</code>, luego se pegan la URL y la clave "anon public" en <code>config.js</code>.</p>
      </div>
    </div>`;
  }

  // --- Verificaciones antes de arrancar ---
  const problems = [];
  if(typeof SUPABASE_URL === 'undefined' || !SUPABASE_URL || SUPABASE_URL.indexOf('PEGA_AQUI') !== -1){
    problems.push('<strong>config.js</strong> todavía tiene el valor de ejemplo en <code>SUPABASE_URL</code>. Pega ahí la "Project URL" de tu proyecto de Supabase.');
  }
  if(typeof SUPABASE_ANON_KEY === 'undefined' || !SUPABASE_ANON_KEY || SUPABASE_ANON_KEY.indexOf('PEGA_AQUI') !== -1){
    problems.push('<strong>config.js</strong> todavía tiene el valor de ejemplo en <code>SUPABASE_ANON_KEY</code>. Pega ahí la clave "anon public" de tu proyecto de Supabase.');
  }
  if(typeof window.supabase === 'undefined'){
    problems.push('No se pudo cargar la librería de Supabase desde internet (unpkg.com). Revisa tu conexión, o que no esté siendo bloqueada por un firewall/adblocker.');
  }
  if(typeof QUIZ_DATA === 'undefined'){
    problems.push('No se pudo cargar <strong>data.js</strong> (el banco de preguntas). Verifica que el archivo esté en la misma carpeta que index.html.');
  }
  if(problems.length){
    showSetupScreen(problems);
    return;
  }

  let sbClient;
  try{
    sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }catch(e){
    showSetupScreen(['No se pudo conectar con Supabase: <code>'+e.message+'</code>. Revisa que la URL y la clave en config.js sean exactamente las de tu proyecto (Project Settings → API).']);
    return;
  }

  const ICON = {
    arrowRight:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowLeft:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    check:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>'
  };

  const QUIZZES = [QUIZ_DATA.diagnostico, ...QUIZ_DATA.simulacros];
  function getQuiz(id){ return QUIZZES.find(q=>q.id===id); }

  const S = {
    booting:true,
    session:null,
    profile:null,
    myAttempts:[],
    view:'auth',
    authMode:'login',
    authError:'',
    authBusy:false,
    currentQuizId:null,
    idx:0,
    answers:{},
    locked:false,
    startTime:null,
    elapsed:0,
    saving:false,
    lastAttempt:null,
    admin:{ loaded:false, profiles:[], attempts:[] }
  };
  let timerInt=null;

  function esc(s){ const d=document.createElement('div'); d.textContent=s==null?'':String(s); return d.innerHTML; }
  function fmtTime(sec){ const m=Math.floor(sec/60).toString().padStart(2,'0'); const s=Math.floor(sec%60).toString().padStart(2,'0'); return m+':'+s; }
  function fmtDate(iso){ const d=new Date(iso); return d.toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'})+' '+d.toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'}); }

  function flattenQuiz(quiz){
    const items=[];
    quiz.casos.forEach(caso=>{
      caso.preguntas.forEach((p,i)=>{
        items.push({ casoId:caso.id, casoTexto:caso.texto, casoArea:caso.area, casoPosInQuiz:0, pregunta:p, keyId:caso.id+'_'+i, ordInCaso:i });
      });
    });
    return items;
  }
  function categoriaFor(quiz, item){
    if(quiz.id==='diagnostico') return item.casoArea;
    if(quiz.id==='psico'){
      const m=item.pregunta.enunciado.match(/^\[(.+?)\]\s*/);
      return m ? m[1] : quiz.nombre;
    }
    return quiz.nombre;
  }
  function displayEnunciado(quiz, item){
    if(quiz.id==='psico') return item.pregunta.enunciado.replace(/^\[(.+?)\]\s*/,'');
    return item.pregunta.enunciado;
  }
  function letterFor(i){ return String.fromCharCode(65+i); }

  function startTimer(){
    stopTimer();
    S.startTime=Date.now();
    timerInt=setInterval(()=>{
      S.elapsed=Math.floor((Date.now()-S.startTime)/1000);
      const el=document.getElementById('timerDisplay');
      if(el) el.textContent=fmtTime(S.elapsed);
    },1000);
  }
  function stopTimer(){ if(timerInt) clearInterval(timerInt); timerInt=null; }

  // ---------- AUTH ----------
  async function boot(){
    try{
      const { data:{ session }, error } = await sbClient.auth.getSession();
      if(error) throw error;
      S.session = session;
      if(session){ await loadProfileAndAttempts(); S.view='home'; }
      else { S.view='auth'; }
      S.booting=false;
      render();

      sbClient.auth.onAuthStateChange(async (event, session)=>{
        S.session = session;
        if(event==='SIGNED_IN'){ await loadProfileAndAttempts(); S.view='home'; render(); }
        if(event==='SIGNED_OUT'){ S.profile=null; S.myAttempts=[]; S.view='auth'; render(); }
      });
    }catch(e){
      appEl.innerHTML = `
      <div class="wrap narrow" style="padding-top:3.5rem;">
        <div class="eyebrow">No se pudo conectar</div>
        <h1 style="font-size:24px;margin:.5rem 0 1rem;">Error al conectar con la base de datos</h1>
        <div class="auth-card">
          <p style="font-size:14px;color:var(--coral);">${esc(e.message||String(e))}</p>
          <p style="font-size:13px;color:var(--ink-soft);">Verifica en config.js que la URL y la clave "anon public" correspondan exactamente a tu proyecto de Supabase, y que hayas ejecutado schema.sql en el SQL Editor.</p>
        </div>
      </div>`;
    }
  }

  async function loadProfileAndAttempts(){
    const uid = S.session.user.id;
    const { data:profile, error:profileErr } = await sbClient.from('profiles').select('*').eq('id',uid).single();
    if(profileErr) console.error('Error cargando perfil:', profileErr.message);
    S.profile = profile || null;
    const { data:attempts, error:attemptsErr } = await sbClient.from('attempts').select('*').eq('user_id',uid).order('created_at',{ascending:false});
    if(attemptsErr) console.error('Error cargando intentos:', attemptsErr.message);
    S.myAttempts = attempts || [];
  }

  async function handleAuthSubmit(e){
    e.preventDefault();
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    const fullName = S.authMode==='register' ? document.getElementById('authName').value.trim() : null;

    S.authError=''; S.authBusy=true; render();

    if(!email || !password){
      S.authError='Escribe tu correo y tu contraseña.';
      S.authBusy=false; render(); return;
    }

    if(S.authMode==='register'){
      const { error } = await sbClient.auth.signUp({ email, password, options:{ data:{ full_name: fullName || email } } });
      if(error){ S.authError=error.message; S.authBusy=false; render(); return; }
      const { data:{ session } } = await sbClient.auth.getSession();
      if(!session){
        S.authBusy=false;
        S.authError='Cuenta creada. Revisa tu correo para confirmar el registro y luego inicia sesión.';
        S.authMode='login';
        render();
        return;
      }
    } else {
      const { error } = await sbClient.auth.signInWithPassword({ email, password });
      if(error){ S.authError=error.message; S.authBusy=false; render(); return; }
    }
    S.authBusy=false;
  }

  async function handleLogout(){
    stopTimer();
    await sbClient.auth.signOut();
  }

  // ---------- QUIZ FLOW ----------
  function startQuiz(quizId){
    S.currentQuizId=quizId;
    S.idx=0;
    S.answers={};
    S.locked=false;
    S.view='quiz';
    startTimer();
    render();
  }

  function selectOption(keyId, optIdx){
    if(S.locked) return;
    S.answers[keyId]=optIdx;
    S.locked=true;
    render();
  }

  function nextQuestion(items){
    if(S.idx < items.length-1){
      S.idx++;
      S.locked = items[S.idx].keyId in S.answers;
      render();
    } else {
      finishQuiz(items);
    }
  }
  function prevQuestion(items){
    if(S.idx>0){
      S.idx--;
      S.locked = items[S.idx].keyId in S.answers;
      render();
    }
  }

  async function finishQuiz(items){
    stopTimer();
    const quiz = getQuiz(S.currentQuizId);
    let correct=0;
    const catAgg={};
    const answersDetail=[];
    items.forEach(item=>{
      const cat = categoriaFor(quiz, item);
      if(!catAgg[cat]) catAgg[cat]={correct:0,total:0};
      catAgg[cat].total++;
      const sel = S.answers[item.keyId];
      const isCorrect = sel===item.pregunta.respuesta;
      if(isCorrect){ correct++; catAgg[cat].correct++; }
      answersDetail.push({
        keyId:item.keyId, categoria:cat,
        enunciado:displayEnunciado(quiz,item),
        selected:sel, correctIdx:item.pregunta.respuesta,
        opciones:item.pregunta.opciones, explicacion:item.pregunta.explicacion,
        isCorrect
      });
    });
    const total=items.length;
    const pct = Math.round((correct/total)*100);

    const attempt = {
      user_id: S.session.user.id,
      quiz_id: quiz.id,
      quiz_nombre: quiz.nombre,
      score: correct,
      total: total,
      pct: pct,
      category_breakdown: catAgg,
      answers: answersDetail,
      duration_seconds: S.elapsed
    };

    S.saving=true;
    S.view='results';
    S.lastAttempt = attempt;
    render();

    const { data, error } = await sbClient.from('attempts').insert(attempt).select().single();
    S.saving=false;
    if(!error && data){
      S.lastAttempt = data;
      S.myAttempts = [data, ...S.myAttempts];
    }
    render();
  }

  function retryQuiz(){ startQuiz(S.currentQuizId); }
  function goHome(){ stopTimer(); S.view='home'; render(); }
  function goHistory(){ S.view='history'; render(); }
  function goAdmin(){ S.view='admin'; render(); if(!S.admin.loaded) loadAdminData(); }

  async function loadAdminData(){
    const { data:profiles } = await sbClient.from('profiles').select('*').order('created_at',{ascending:false});
    const { data:attempts } = await sbClient.from('attempts').select('*').order('created_at',{ascending:false});
    S.admin = { loaded:true, profiles:profiles||[], attempts:attempts||[] };
    render();
  }

  // ---------- AGGREGATION HELPERS ----------
  function aggregateCategoriesFromAttempts(attempts){
    const agg={};
    attempts.forEach(a=>{
      const cb=a.category_breakdown||{};
      Object.keys(cb).forEach(cat=>{
        if(!agg[cat]) agg[cat]={correct:0,total:0};
        agg[cat].correct+=cb[cat].correct;
        agg[cat].total+=cb[cat].total;
      });
    });
    return agg;
  }
  function weakStrong(agg){
    const rows = Object.keys(agg).map(cat=>({cat, pct: agg[cat].total? Math.round(agg[cat].correct/agg[cat].total*100):0, ...agg[cat]}));
    rows.sort((a,b)=>a.pct-b.pct);
    return rows;
  }

  // ---------- RENDER: AUTH ----------
  function renderAuth(){
    return `
    <div class="wrap narrow">
      <div style="text-align:center;margin-bottom:1.6rem;">
        <div class="eyebrow" style="justify-content:center;">Concurso Docente 2026</div>
        <h1 style="font-size:26px;margin:.4rem 0 0;">Plataforma de simulacros</h1>
      </div>
      <div class="auth-card">
        <div class="auth-tabs">
          <div class="auth-tab ${S.authMode==='login'?'active':''}" onclick="APP.setAuthMode('login')">Iniciar sesión</div>
          <div class="auth-tab ${S.authMode==='register'?'active':''}" onclick="APP.setAuthMode('register')">Registrarme</div>
        </div>
        ${S.authError ? `<div class="auth-error">${esc(S.authError)}</div>` : ''}
        <form onsubmit="APP.authSubmit(event)">
          ${S.authMode==='register' ? `
          <div class="field"><label>Nombre completo</label><input id="authName" type="text" required placeholder="Tu nombre" /></div>
          ` : ''}
          <div class="field"><label>Correo electrónico</label><input id="authEmail" type="email" required placeholder="nombre@correo.com" /></div>
          <div class="field"><label>Contraseña</label><input id="authPassword" type="password" required minlength="6" placeholder="Mínimo 6 caracteres" /></div>
          <button class="btn block" type="submit" ${S.authBusy?'disabled':''}>${S.authBusy?'Un momento…':(S.authMode==='login'?'Entrar':'Crear cuenta')}</button>
        </form>
        <p class="auth-note">Tus resultados quedan guardados en tu cuenta y podrás consultarlos cuando quieras.</p>
      </div>
    </div>`;
  }

  // ---------- RENDER: HOME ----------
  function quizCard(quiz, i){
    const attemptsForQuiz = S.myAttempts.filter(a=>a.quiz_id===quiz.id);
    const best = attemptsForQuiz.length ? Math.max(...attemptsForQuiz.map(a=>a.pct)) : null;
    return `
    <div class="card">
      <span class="num">Simulacro ${String(i+1).padStart(2,'0')}</span>
      <h3>${esc(quiz.nombre)}</h3>
      <p>${esc(quiz.descripcion)}</p>
      <div class="meta"><span>${quiz.casos.length*3} preguntas</span></div>
      ${best!==null ? `<span class="badge-done">${ICON.check} Mejor puntaje: ${best}%</span>` : ''}
      <button class="btn" onclick="APP.start('${quiz.id}')">${best!==null?'Repetir simulacro':'Comenzar simulacro'}</button>
    </div>`;
  }

  function renderHome(){
    const diag = S.myAttempts.filter(a=>a.quiz_id==='diagnostico');
    const hasDiag = diag.length>0;
    const overallAgg = aggregateCategoriesFromAttempts(S.myAttempts);
    const rows = weakStrong(overallAgg);
    const weakest = rows.slice(0,2);
    const strongest = rows.slice(-2).reverse();

    return `
    <div class="wrap">
      <div class="topbar">
        <div class="brand"><span class="mark">CD</span><span class="name">${esc(S.profile ? S.profile.full_name : '')}</span>${S.profile && S.profile.is_admin ? '<span class="badge-admin" style="margin-left:6px;">Admin</span>':''}</div>
        <div class="topnav-actions">
          ${S.profile && S.profile.is_admin ? `<button class="btn ghost small" onclick="APP.admin()">Panel de administrador</button>`:''}
          <button class="btn ghost small" onclick="APP.history()">Mi historial</button>
          <button class="btn ghost small" onclick="APP.logout()">Salir</button>
        </div>
      </div>
      <div class="eyebrow">Componente genérico · Concurso Docente 2026</div>
      <h1 style="font-size:28px;margin:.4rem 0 .3rem;">Tu preparación</h1>

      ${!hasDiag ? `
      <div class="card" style="margin-top:1.2rem;border-color:var(--gold);">
        <span class="num">Empieza aquí</span>
        <h3>Conducta de entrada</h3>
        <p>12 preguntas que mezclan las cuatro áreas para identificar tus fortalezas y lo que debes reforzar antes de los simulacros completos.</p>
        <button class="btn" onclick="APP.start('diagnostico')">Realizar conducta de entrada</button>
      </div>` : `
      <div class="card" style="margin-top:1.2rem;">
        <span class="num">Diagnóstico realizado</span>
        <h3>Tus resultados generales</h3>
        <div class="stat-grid" style="grid-template-columns:1fr 1fr;">
          <div>
            <p style="font-size:12px;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.05em;margin-bottom:.4rem;">Aspectos a reforzar</p>
            ${weakest.map(r=>`<div class="catbar-row"><div class="catbar-top"><span>${esc(r.cat)}</span><span>${r.pct}%</span></div><div class="catbar-track"><div class="catbar-fill weak" style="width:${r.pct}%"></div></div></div>`).join('')}
          </div>
          <div>
            <p style="font-size:12px;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.05em;margin-bottom:.4rem;">Puntos fuertes</p>
            ${strongest.map(r=>`<div class="catbar-row"><div class="catbar-top"><span>${esc(r.cat)}</span><span>${r.pct}%</span></div><div class="catbar-track"><div class="catbar-fill strong" style="width:${r.pct}%"></div></div></div>`).join('')}
          </div>
        </div>
        <button class="btn ghost small" onclick="APP.start('diagnostico')" style="width:fit-content;">Repetir conducta de entrada</button>
      </div>
      `}

      <h3 class="section-title">Simulacros completos (30 preguntas)</h3>
      <p class="section-sub">10 textos con 3 preguntas cada uno. Opciones de tres alternativas: una fácil de descartar y dos muy cercanas.</p>
      <div class="grid">${QUIZ_DATA.simulacros.map((q,i)=>quizCard(q,i)).join('')}</div>
    </div>`;
  }

  // ---------- RENDER: QUIZ ----------
  function renderQuiz(){
    const quiz = getQuiz(S.currentQuizId);
    const items = flattenQuiz(quiz);
    const item = items[S.idx];
    const total = items.length;
    const answered = S.answers[item.keyId];
    const isLocked = answered !== undefined;
    const cat = categoriaFor(quiz, item);
    const enunciado = displayEnunciado(quiz, item);

    const optionsHtml = item.pregunta.opciones.map((opt,oi)=>{
      let cls='option';
      if(isLocked){
        cls+=' disabled';
        if(oi===item.pregunta.respuesta) cls+=' correct';
        else if(oi===answered) cls+=' incorrect';
        else cls+=' dim';
      }
      return `<div class="${cls}" onclick="APP.select('${item.keyId}',${oi})">
        <span class="letter">${letterFor(oi)}</span><span>${esc(opt)}</span>
      </div>`;
    }).join('');

    let feedback='';
    if(isLocked){
      const ok = answered===item.pregunta.respuesta;
      feedback = `<div class="feedback ${ok?'ok':'bad'}"><span class="tag">${ok?'Respuesta correcta':'Respuesta incorrecta'}</span>${esc(item.pregunta.explicacion)}</div>`;
    }
    const isLast = S.idx===total-1;
    const casoNum = Math.floor(S.idx/3)+1;
    const casoTotal = Math.ceil(total/3);
    const posInCaso = (S.idx%3)+1;

    return `
    <div class="wrap">
      <div class="topbar">
        <div class="brand" onclick="APP.home()"><span class="mark">CD</span><span class="name">${esc(quiz.nombre)}</span></div>
        <div class="timer"><span class="dot"></span><span id="timerDisplay">${fmtTime(S.elapsed)}</span></div>
      </div>
      <div class="progress-row">
        <div class="progress-track"><div class="progress-fill" style="width:${((S.idx+1)/total*100)}%"></div></div>
        <div class="progress-label">Pregunta ${S.idx+1}/${total} · Caso ${casoNum}/${casoTotal} (${posInCaso}/3)</div>
      </div>
      <span class="qcat">${esc(cat)}</span>
      ${item.casoTexto ? `<div class="qcontext">${esc(item.casoTexto)}</div>` : ''}
      <div class="qstatement">${esc(enunciado)}</div>
      <div class="options">${optionsHtml}</div>
      ${feedback}
      <div class="footer-row">
        <button class="btn ghost small" onclick="APP.prev()" ${S.idx===0?'style="visibility:hidden"':''}>${ICON.arrowLeft} Anterior</button>
        <button class="btn small" onclick="APP.next()" ${!isLocked?'style="opacity:.35;pointer-events:none"':''}>${isLast?'Ver resultados':'Siguiente'} ${ICON.arrowRight}</button>
      </div>
    </div>`;
  }

  // ---------- RENDER: RESULTS ----------
  function renderResults(){
    const a = S.lastAttempt;
    const quiz = getQuiz(a.quiz_id);
    const cats = a.category_breakdown;
    const catBars = Object.keys(cats).map(c=>{
      const d=cats[c]; const pct=Math.round((d.correct/d.total)*100);
      const cls = pct<60?'weak':(pct>=80?'strong':'');
      return `<div class="catbar-row"><div class="catbar-top"><span>${esc(c)}</span><span>${d.correct}/${d.total}</span></div><div class="catbar-track"><div class="catbar-fill ${cls}" style="width:${pct}%"></div></div></div>`;
    }).join('');

    const review = a.answers.map((q,i)=>`
      <div class="review-item">
        <div class="review-q">${i+1}. ${esc(q.enunciado)}</div>
        ${!q.isCorrect ? `<div class="review-wrong-tag" style="font-size:13px;margin-bottom:.2rem;">Tu respuesta: ${esc(q.opciones[q.selected])}</div>` : ''}
        <div class="review-correct">Respuesta correcta: ${esc(q.opciones[q.correctIdx])}</div>
        <div class="review-exp">${esc(q.explicacion)}</div>
      </div>`).join('');

    return `
    <div class="wrap">
      <div class="topbar"><div class="brand" onclick="APP.home()"><span class="mark">CD</span><span class="name">Concurso Docente 2026</span></div></div>
      <div class="eyebrow">${esc(quiz.nombre)}</div>
      <div class="result-head">
        <div class="sello"><span class="pct">${a.pct}%</span><span class="lbl">Resultado</span></div>
        <div>
          <h2 style="margin:0 0 .3rem;font-size:24px;">${S.saving?'Guardando resultado…':'Resultado guardado en tu perfil'}</h2>
          <p style="margin:0;color:var(--ink-soft);font-size:14px;">Respondiste ${a.score} de ${a.total} preguntas correctamente en ${fmtTime(a.duration_seconds)}.</p>
        </div>
      </div>
      <h3 class="section-title" style="margin-top:0;">Desempeño por categoría</h3>
      ${catBars}
      <div style="display:flex;gap:.7rem;margin:1.6rem 0 2.4rem;flex-wrap:wrap;">
        <button class="btn" onclick="APP.retry()">Repetir este simulacro</button>
        <button class="btn ghost" onclick="APP.history()">Ver mi historial</button>
        <button class="btn ghost" onclick="APP.home()">Volver al inicio</button>
      </div>
      <h3 class="section-title">Repaso de preguntas</h3>
      ${review}
    </div>`;
  }

  // ---------- RENDER: HISTORY ----------
  function renderHistory(){
    const rows = S.myAttempts.map(a=>`
      <tr>
        <td>${esc(a.quiz_nombre)}</td>
        <td>${a.score}/${a.total}</td>
        <td>${a.pct}%</td>
        <td>${fmtTime(a.duration_seconds||0)}</td>
        <td>${fmtDate(a.created_at)}</td>
      </tr>`).join('');
    const agg = aggregateCategoriesFromAttempts(S.myAttempts);
    const rowsCat = weakStrong(agg);

    return `
    <div class="wrap">
      <div class="topbar"><div class="brand" onclick="APP.home()"><span class="mark">CD</span><span class="name">Mi historial</span></div></div>
      <div class="eyebrow">Historial de intentos</div>
      <h1 style="font-size:26px;margin:.4rem 0 1rem;">Tus resultados</h1>
      ${S.myAttempts.length===0 ? '<p style="color:var(--ink-soft);">Aún no has resuelto ningún simulacro.</p>' : `
      <table class="data-table">
        <thead><tr><th>Prueba</th><th>Aciertos</th><th>%</th><th>Tiempo</th><th>Fecha</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <h3 class="section-title">Desempeño acumulado por categoría</h3>
      ${rowsCat.map(r=>{
        const cls = r.pct<60?'weak':(r.pct>=80?'strong':'');
        return `<div class="catbar-row"><div class="catbar-top"><span>${esc(r.cat)}</span><span>${r.correct}/${r.total} · ${r.pct}%</span></div><div class="catbar-track"><div class="catbar-fill ${cls}" style="width:${r.pct}%"></div></div></div>`;
      }).join('')}
      `}
      <button class="btn ghost" style="margin-top:1.6rem;" onclick="APP.home()">Volver al inicio</button>
    </div>`;
  }

  // ---------- RENDER: ADMIN ----------
  function renderAdmin(){
    if(!S.admin.loaded){
      return `<div class="wrap"><div class="topbar"><div class="brand" onclick="APP.home()"><span class="mark">CD</span><span class="name">Panel de administrador</span></div></div><div class="center-loading">Cargando datos…</div></div>`;
    }
    const { profiles, attempts } = S.admin;
    const totalUsers = profiles.length;
    const totalAttempts = attempts.length;
    const avgPct = attempts.length ? Math.round(attempts.reduce((s,a)=>s+a.pct,0)/attempts.length) : 0;

    // por usuario
    const byUser = {};
    profiles.forEach(p=>{ byUser[p.id] = { profile:p, attempts:[] }; });
    attempts.forEach(a=>{ if(byUser[a.user_id]) byUser[a.user_id].attempts.push(a); });
    const userRows = Object.values(byUser).map(u=>{
      const n = u.attempts.length;
      const avg = n ? Math.round(u.attempts.reduce((s,a)=>s+a.pct,0)/n) : null;
      const agg = aggregateCategoriesFromAttempts(u.attempts);
      const rows = weakStrong(agg);
      const weakest = rows[0];
      return `<tr>
        <td>${esc(u.profile.full_name||'')}${u.profile.is_admin?' <span class="badge-admin">Admin</span>':''}</td>
        <td>${esc(u.profile.email||'')}</td>
        <td>${n}</td>
        <td>${avg!==null?avg+'%':'—'}</td>
        <td>${weakest ? esc(weakest.cat)+' ('+weakest.pct+'%)' : '—'}</td>
        <td>${fmtDate(u.profile.created_at)}</td>
      </tr>`;
    }).join('');

    // agregados por prueba
    const byQuiz={};
    attempts.forEach(a=>{
      if(!byQuiz[a.quiz_id]) byQuiz[a.quiz_id]={nombre:a.quiz_nombre, n:0, sum:0};
      byQuiz[a.quiz_id].n++; byQuiz[a.quiz_id].sum+=a.pct;
    });
    const quizRows = Object.values(byQuiz).map(q=>`
      <tr><td>${esc(q.nombre)}</td><td>${q.n}</td><td>${Math.round(q.sum/q.n)}%</td></tr>`).join('');

    // agregados por categoría (todos los usuarios) — para orientar el curso
    const catAgg = aggregateCategoriesFromAttempts(attempts);
    const catRows = weakStrong(catAgg);

    return `
    <div class="wrap">
      <div class="topbar"><div class="brand" onclick="APP.home()"><span class="mark">CD</span><span class="name">Panel de administrador</span></div><button class="btn ghost small" onclick="APP.home()">Volver</button></div>
      <div class="eyebrow">Solo administrador</div>
      <h1 style="font-size:26px;margin:.4rem 0 1rem;">Estadísticas generales</h1>
      <div class="stat-grid">
        <div class="stat-box"><div class="n">${totalUsers}</div><div class="l">Usuarios registrados</div></div>
        <div class="stat-box"><div class="n">${totalAttempts}</div><div class="l">Intentos totales</div></div>
        <div class="stat-box"><div class="n">${avgPct}%</div><div class="l">Promedio general</div></div>
      </div>

      <h3 class="section-title">Categorías más débiles del grupo (para orientar el curso)</h3>
      <p class="section-sub">Ordenadas de menor a mayor porcentaje de acierto, sumando a todos los usuarios.</p>
      ${catRows.map(r=>{
        const cls = r.pct<60?'weak':(r.pct>=80?'strong':'');
        return `<div class="catbar-row"><div class="catbar-top"><span>${esc(r.cat)}</span><span>${r.correct}/${r.total} · ${r.pct}%</span></div><div class="catbar-track"><div class="catbar-fill ${cls}" style="width:${r.pct}%"></div></div></div>`;
      }).join('') || '<p style="color:var(--ink-soft);">Aún no hay intentos registrados.</p>'}

      <h3 class="section-title">Promedio por simulacro</h3>
      <table class="data-table">
        <thead><tr><th>Simulacro</th><th>Intentos</th><th>Promedio</th></tr></thead>
        <tbody>${quizRows || '<tr><td colspan="3">Sin datos aún</td></tr>'}</tbody>
      </table>

      <h3 class="section-title">Usuarios registrados</h3>
      <table class="data-table">
        <thead><tr><th>Nombre</th><th>Correo</th><th>Intentos</th><th>Promedio</th><th>Punto más débil</th><th>Registrado</th></tr></thead>
        <tbody>${userRows || '<tr><td colspan="6">Sin usuarios aún</td></tr>'}</tbody>
      </table>
    </div>`;
  }

  // ---------- MAIN RENDER ----------
  function render(){
    const app = appEl;
    if(S.booting){ app.innerHTML = '<div class="center-loading">Cargando…</div>'; return; }
    if(S.view==='auth') app.innerHTML = renderAuth();
    else if(S.view==='home') app.innerHTML = renderHome();
    else if(S.view==='quiz') app.innerHTML = renderQuiz();
    else if(S.view==='results') app.innerHTML = renderResults();
    else if(S.view==='history') app.innerHTML = renderHistory();
    else if(S.view==='admin') app.innerHTML = renderAdmin();
    window.scrollTo({top:0, behavior:'instant'});
  }

  window.APP = {
    setAuthMode: (m)=>{ S.authMode=m; S.authError=''; render(); },
    authSubmit: handleAuthSubmit,
    logout: handleLogout,
    start: startQuiz,
    select: selectOption,
    next: ()=>nextQuestion(flattenQuiz(getQuiz(S.currentQuizId))),
    prev: ()=>prevQuestion(flattenQuiz(getQuiz(S.currentQuizId))),
    retry: retryQuiz,
    home: goHome,
    history: goHistory,
    admin: goAdmin
  };

  boot();
})();
