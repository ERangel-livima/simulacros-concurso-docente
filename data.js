const QUIZ_DATA = {
  "diagnostico": {
    "id": "diagnostico",
    "nombre": "Conducta de entrada",
    "descripcion": "Diagnóstico inicial de 12 preguntas (4 casos, uno por cada área) para identificar fortalezas y aspectos a mejorar antes de iniciar los simulacros completos.",
    "casos": [
      {
        "id": "d1",
        "area": "Lectura crítica",
        "texto": "La formación docente en TIC suele centrarse en el manejo técnico de herramientas —cómo usar una plataforma, cómo crear un cuestionario digital— y no tanto en su integración pedagógica real dentro de una secuencia didáctica. El resultado es que muchos docentes saben operar las herramientas, pero no necesariamente saben cuándo y por qué usarlas frente a una alternativa más sencilla, como la explicación oral o el trabajo en el cuaderno.",
        "preguntas": [
          {
            "enunciado": "La crítica principal del texto hacia la formación docente en TIC es que:",
            "opciones": [
              "Se enfoca en el manejo técnico sin desarrollar suficientemente el criterio pedagógico para decidir cuándo usar esas herramientas",
              "Las tecnologías educativas nunca deberían usarse en el aula",
              "Los docentes actuales no tienen ningún interés en aprender a usar tecnología"
            ],
            "respuesta": 0,
            "explicacion": "El texto no rechaza la tecnología en sí (opción B) ni habla del interés de los docentes (opción C); su crítica específica es la falta de desarrollo del criterio pedagógico para decidir cuándo y por qué usar una herramienta, más allá de saber operarla."
          },
          {
            "enunciado": "Un ejemplo coherente con la crítica del texto sería:",
            "opciones": [
              "Un docente que usa una plataforma digital compleja para una actividad que se resolvería igual de bien con una explicación oral breve",
              "Un docente que elige la herramienta más adecuada según el objetivo de aprendizaje de cada clase",
              "Un docente que nunca ha usado ninguna herramienta digital en su carrera"
            ],
            "respuesta": 0,
            "explicacion": "La opción A ilustra exactamente el problema señalado: usar tecnología sin criterio pedagógico claro sobre su pertinencia frente a una alternativa más simple; la opción B describe justo lo contrario (buen criterio), y la opción C no ilustra la crítica sino un caso distinto."
          },
          {
            "enunciado": "¿Qué tipo de formación docente atendería mejor la crítica planteada en el texto?",
            "opciones": [
              "Formación centrada exclusivamente en el manejo técnico avanzado de nuevas plataformas",
              "Formación que combine el manejo técnico con criterios pedagógicos claros sobre cuándo y por qué integrar cada herramienta",
              "Eliminar cualquier tipo de formación docente relacionada con tecnología"
            ],
            "respuesta": 1,
            "explicacion": "Si la crítica es la falta de criterio pedagógico, la solución coherente combina ambos componentes (técnico y pedagógico), no solo refuerza lo técnico (opción A) ni elimina la formación en tecnología (opción C)."
          }
        ]
      },
      {
        "id": "d2",
        "area": "Razonamiento cuantitativo",
        "texto": "Un colegio aplicó una prueba diagnóstica a 320 estudiantes de bachillerato. El 35% obtuvo un desempeño bajo, el 45% un desempeño medio y el resto un desempeño alto.",
        "preguntas": [
          {
            "enunciado": "¿Cuántos estudiantes obtuvieron desempeño alto?",
            "opciones": [
              "64",
              "58",
              "72"
            ],
            "respuesta": 0,
            "explicacion": "100%-35%-45%=20% de 320 = 64 estudiantes."
          },
          {
            "enunciado": "¿Cuántos estudiantes más obtuvieron desempeño medio que desempeño bajo?",
            "opciones": [
              "32",
              "16",
              "45"
            ],
            "respuesta": 0,
            "explicacion": "Medio = 45% de 320=144. Bajo=35% de 320=112. Diferencia=144-112=32."
          },
          {
            "enunciado": "Si se aplica un plan de refuerzo y el próximo semestre 20 estudiantes de desempeño bajo pasan a desempeño medio, ¿qué porcentaje del total representará entonces el desempeño bajo?",
            "opciones": [
              "28.75%, aproximadamente 29%",
              "35%",
              "25%"
            ],
            "respuesta": 0,
            "explicacion": "Nuevo bajo = 112-20=92. 92/320=0.2875=28.75%, aproximadamente 29%."
          }
        ]
      },
      {
        "id": "d3",
        "area": "Pedagogía y legislación educativa",
        "texto": "Un docente decide, sin previo aviso a sus estudiantes ni a sus acudientes, cambiar la fecha de un examen final y adelantarla una semana, argumentando que así tendrá más tiempo para calificar antes del cierre del periodo.",
        "preguntas": [
          {
            "enunciado": "Esta actuación es problemática principalmente porque:",
            "opciones": [
              "Vulnera el derecho de los estudiantes a conocer con anticipación las condiciones de su proceso evaluativo, un principio básico del debido proceso académico",
              "Los docentes nunca pueden modificar fechas de evaluación bajo ninguna circunstancia",
              "Calificar exámenes antes del cierre del periodo está prohibido por la normativa educativa"
            ],
            "respuesta": 0,
            "explicacion": "El problema de fondo es la falta de anticipación y comunicación de un cambio que afecta el proceso evaluativo, lo cual vulnera el debido proceso; no es cierto que las fechas nunca puedan modificarse (opción B) ni que calificar antes del cierre esté prohibido (opción C, una afirmación inventada)."
          },
          {
            "enunciado": "¿Cuál habría sido el procedimiento más adecuado si el docente necesitaba adelantar la fecha?",
            "opciones": [
              "Comunicar el cambio con suficiente anticipación a estudiantes y, si aplica, a los acudientes, explicando el motivo",
              "Adelantar el examen sin avisar, ya que es una decisión exclusivamente pedagógica del docente",
              "Consultar únicamente a los estudiantes con mejor rendimiento antes de decidir"
            ],
            "respuesta": 0,
            "explicacion": "El procedimiento adecuado exige comunicación anticipada y transparente a toda la comunidad afectada, no una decisión unilateral sin aviso (opción B) ni una consulta parcial y arbitraria a solo algunos estudiantes (opción C)."
          },
          {
            "enunciado": "¿Qué principio general de la evaluación del aprendizaje se ve comprometido en este caso?",
            "opciones": [
              "La transparencia y la comunicación previa de las condiciones de evaluación a la comunidad educativa",
              "La obligación de que todas las evaluaciones sean orales",
              "La prohibición de aplicar más de un examen por periodo académico"
            ],
            "respuesta": 0,
            "explicacion": "El principio afectado es la transparencia y comunicación previa de las condiciones evaluativas; las otras dos opciones son afirmaciones normativas inventadas que no corresponden al marco educativo vigente."
          }
        ]
      },
      {
        "id": "d4",
        "area": "Prueba psicotécnica",
        "texto": "Un docente debe entregar, en un plazo muy ajustado, un informe pedagógico que depende de información que otro colega aún no le ha entregado, a pesar de haberla solicitado con tiempo.",
        "preguntas": [
          {
            "enunciado": "[Negociación y mediación] ¿Cuál sería la actuación más adecuada del docente ante este retraso?",
            "opciones": [
              "Comunicarse directamente con el colega para entender la causa del retraso y acordar juntos una solución realista frente al plazo",
              "Entregar el informe incompleto sin avisar a nadie sobre la razón del retraso",
              "Reclamar el retraso directamente ante el rector, sin antes hablar con el colega involucrado"
            ],
            "respuesta": 0,
            "explicacion": "La actuación más constructiva prioriza el diálogo directo con la persona involucrada para entender la causa y buscar una solución conjunta, antes de escalar el problema (opción C) o de entregar un trabajo incompleto sin comunicar la situación (opción B)."
          },
          {
            "enunciado": "[Compromiso social e institucional] Si finalmente no logra reunir toda la información a tiempo, ¿qué actitud sería más responsable?",
            "opciones": [
              "Informar oportunamente a quien corresponda sobre la situación y las gestiones realizadas, proponiendo un plazo ajustado razonable",
              "No entregar nada y evitar comunicarse con nadie hasta que alguien pregunte",
              "Inventar información faltante para completar el informe a tiempo"
            ],
            "respuesta": 0,
            "explicacion": "La responsabilidad institucional exige comunicación oportuna y honesta sobre las dificultades, con una propuesta razonable de solución; ocultar la situación (opción B) o falsear información (opción C, una falta grave de integridad) no son actuaciones aceptables."
          },
          {
            "enunciado": "[Iniciativa] Para evitar que una situación similar se repita en el futuro, ¿qué actuación reflejaría mejor esta competencia?",
            "opciones": [
              "Proponer, para futuros informes conjuntos, acordar plazos intermedios de entrega parcial entre los colegas involucrados",
              "Evitar en adelante cualquier trabajo que dependa de información de otros colegas",
              "No hacer ningún ajuste, confiando en que la próxima vez será diferente sin ninguna razón concreta"
            ],
            "respuesta": 0,
            "explicacion": "La iniciativa se refleja en proponer un ajuste concreto al proceso de trabajo colaborativo (plazos intermedios), a diferencia de evitar la colaboración en el futuro (opción B, contraria al trabajo en equipo) o de no hacer ningún cambio real (opción C)."
          }
        ]
      }
    ]
  },
  "simulacros": [
    {
      "id": "lc",
      "nombre": "Lectura crítica",
      "descripcion": "10 textos con 3 preguntas cada uno. Opciones de tres alternativas: una fácil de descartar y dos muy cercanas entre sí.",
      "casos": [
        {
          "id": "lc1",
          "texto": "Durante años se asumió que repetir un grado beneficiaba a los estudiantes con bajo rendimiento, dándoles 'más tiempo' para madurar los contenidos. Sin embargo, varios seguimientos longitudinales muestran que quienes repiten tienden a tener mayores tasas de deserción posterior que estudiantes con dificultades similares que fueron promovidos con apoyo adicional. Esto no significa que promover automáticamente sea la solución: sin acompañamiento pedagógico focalizado, la promoción sin repitencia simplemente traslada el problema a grados posteriores.",
          "preguntas": [
            {
              "enunciado": "La tesis central del texto es que:",
              "opciones": [
                "Repetir el año siempre es preferible a promover al estudiante",
                "Ni repetir ni promover automáticamente resuelven el problema si no hay acompañamiento pedagógico",
                "La repitencia y la promoción automática producen exactamente los mismos resultados"
              ],
              "respuesta": 1,
              "explicacion": "El texto rechaza tanto la repitencia sin más (mayor deserción) como la promoción automática sin apoyo ('simplemente traslada el problema'). La opción C es errónea porque el texto sí distingue diferencias entre ambas estrategias, y la A contradice directamente la evidencia que cita el texto."
            },
            {
              "enunciado": "La expresión 'traslada el problema a grados posteriores' funciona en el texto para señalar que:",
              "opciones": [
                "La promoción automática sin apoyo no elimina la dificultad de aprendizaje, solo la pospone",
                "Los problemas de un estudiante se resuelven solos con el tiempo, sin intervención",
                "Los docentes de grados posteriores son responsables de la deserción escolar"
              ],
              "respuesta": 0,
              "explicacion": "La frase indica que la dificultad sigue existiendo, solo que aparece más adelante en la trayectoria escolar; no implica que se resuelva sola (opción B) ni atribuye responsabilidad a otros docentes (opción C), que es una inferencia no sustentada por el texto."
            },
            {
              "enunciado": "¿Qué tipo de evidencia usa el autor para cuestionar la creencia tradicional sobre la repitencia?",
              "opciones": [
                "Seguimientos longitudinales que comparan trayectorias de estudiantes con dificultades similares",
                "Una opinión personal sin ningún tipo de dato de respaldo",
                "Una encuesta de percepción aplicada a docentes sobre la repitencia"
              ],
              "respuesta": 0,
              "explicacion": "El texto menciona explícitamente 'seguimientos longitudinales' que comparan grupos similares (repitentes vs. promovidos con apoyo), lo cual es evidencia empírica comparativa, no una opinión ni una encuesta de percepción."
            }
          ]
        },
        {
          "id": "lc2",
          "texto": "La jornada única, que busca ampliar el tiempo escolar diario, suele presentarse como una medida que por sí sola mejora los aprendizajes. Los datos disponibles matizan esa expectativa: el efecto positivo sobre los resultados académicos es consistente solo en instituciones donde las horas adicionales se destinan a actividades pedagógicas estructuradas; en colegios donde el tiempo extra no está bien planificado, el impacto es marginal o nulo. Es decir, lo determinante no es cuánto tiempo pasan los estudiantes en el colegio, sino qué se hace con ese tiempo.",
          "preguntas": [
            {
              "enunciado": "Según el texto, el factor que realmente determina el impacto de la jornada única es:",
              "opciones": [
                "La cantidad total de horas que el estudiante permanece en el colegio",
                "La forma en que se planifica y estructura pedagógicamente el tiempo adicional",
                "La opinión de las familias sobre la jornada única"
              ],
              "respuesta": 1,
              "explicacion": "El texto lo afirma directamente: 'lo determinante no es cuánto tiempo... sino qué se hace con ese tiempo', es decir, la planificación pedagógica del tiempo adicional, no la cantidad de horas en sí (opción A, que es justamente lo que el texto matiza)."
            },
            {
              "enunciado": "La relación entre las dos oraciones 'el efecto positivo... es consistente solo en instituciones donde las horas adicionales se destinan a actividades pedagógicas estructuradas' y 'en colegios donde el tiempo extra no está bien planificado, el impacto es marginal o nulo' es de:",
              "opciones": [
                "Contraste entre dos condiciones opuestas que llevan a resultados distintos",
                "Repetición idéntica de la misma idea sin ningún matiz adicional",
                "Contradicción, ya que ambas afirmaciones no pueden ser ciertas al mismo tiempo"
              ],
              "respuesta": 0,
              "explicacion": "Son dos caras de la misma idea (planificación buena vs. mala) que se contrastan para reforzar el argumento central; no son una contradicción (son compatibles y complementarias) ni una simple repetición, porque cada una describe una condición distinta con su respectivo resultado."
            },
            {
              "enunciado": "Un ejemplo que ilustraría mejor la advertencia del autor sería:",
              "opciones": [
                "Un colegio que extiende la jornada dos horas más, dedicadas a refuerzo académico con seguimiento individual",
                "Un colegio que extiende la jornada dos horas más sin un plan claro de qué actividades realizar en ese tiempo",
                "Un colegio que decide no adoptar la jornada única por falta de infraestructura"
              ],
              "respuesta": 1,
              "explicacion": "La advertencia del autor es sobre el tiempo extra sin planificación pedagógica, que es justamente lo que describe la opción B. La opción A describe el escenario contrario (con buena planificación), y la opción C no ilustra la advertencia sobre el uso del tiempo, sino una decisión distinta de no implementar la jornada."
            }
          ]
        },
        {
          "id": "lc3",
          "texto": "Un rector defiende el uso de rankings de colegios basados en resultados de pruebas estandarizadas: 'Le dan a las familias información objetiva para elegir'. Una investigadora responde: 'La objetividad es aparente. Los rankings no controlan por el contexto socioeconómico de los estudiantes, de modo que terminan premiando a los colegios que reciben a los estudiantes con más ventajas previas, no necesariamente a los que agregan más valor educativo'.",
          "preguntas": [
            {
              "enunciado": "El argumento de la investigadora cuestiona principalmente:",
              "opciones": [
                "Que exista algún tipo de evaluación estandarizada en la educación",
                "Que los rankings, al no controlar por contexto socioeconómico, midan realmente la calidad educativa que agregan los colegios",
                "Que las familias tengan derecho a recibir información sobre los colegios"
              ],
              "respuesta": 1,
              "explicacion": "La investigadora no rechaza la evaluación en sí ni el derecho a la información; cuestiona específicamente que el ranking, al ignorar el contexto socioeconómico, confunda 'punto de partida de los estudiantes' con 'valor agregado por el colegio'."
            },
            {
              "enunciado": "La expresión 'agregan más valor educativo' se refiere, en el contexto del texto, a:",
              "opciones": [
                "El precio de la matrícula que cobra cada institución educativa",
                "La mejora real que un colegio genera en el aprendizaje de sus estudiantes, más allá de las condiciones con las que llegaron",
                "El número total de estudiantes matriculados en la institución"
              ],
              "respuesta": 1,
              "explicacion": "En el contexto de la crítica a los rankings, 'valor agregado' se opone a 'ventajas previas': se refiere a cuánto mejora efectivamente el colegio a sus estudiantes, independientemente de su punto de partida socioeconómico, no al costo de la matrícula ni al tamaño de la institución."
            },
            {
              "enunciado": "¿Cuál sería un ajuste metodológico coherente con la crítica de la investigadora?",
              "opciones": [
                "Eliminar por completo cualquier medición de resultados académicos en los colegios",
                "Comparar los resultados de los estudiantes considerando su nivel socioeconómico y sus resultados previos, no solo el puntaje final",
                "Publicar los rankings con mayor frecuencia para que sean más actuales"
              ],
              "respuesta": 1,
              "explicacion": "Si la crítica es que no se controla por contexto socioeconómico, el ajuste lógico es incorporar ese control (y el punto de partida de los estudiantes) en la comparación, no eliminar la medición (opción A) ni simplemente publicarla con más frecuencia (opción C), que no resuelve el problema metodológico señalado."
            }
          ]
        },
        {
          "id": "lc4",
          "texto": "El bilingüismo escolar en Colombia enfrenta una paradoja: la política pública exige resultados crecientes en inglés, pero la disponibilidad de docentes certificados en ese nivel de dominio es especialmente escasa en zonas rurales. El resultado frecuente es que las metas se cumplen en el papel mediante estrategias de corto plazo —como talleres puntuales— que no logran sostener un nivel de competencia comunicativa real en los estudiantes a mediano plazo.",
          "preguntas": [
            {
              "enunciado": "La paradoja que describe el texto consiste en que:",
              "opciones": [
                "Se exigen resultados crecientes en inglés sin contar con suficientes docentes calificados para lograrlos, especialmente en zonas rurales",
                "Los estudiantes rurales no tienen ningún interés en aprender inglés",
                "El inglés dejó de ser una prioridad dentro de la política educativa nacional"
              ],
              "respuesta": 0,
              "explicacion": "El texto define la paradoja explícitamente: exigencia de resultados crecientes frente a escasez de docentes certificados, sobre todo en zonas rurales. No dice nada sobre el interés de los estudiantes ni sugiere que el inglés haya dejado de ser prioridad; al contrario, indica que sigue siendo exigido."
            },
            {
              "enunciado": "Según el texto, ¿qué ocurre cuando las metas de bilingüismo 'se cumplen en el papel'?",
              "opciones": [
                "Los estudiantes alcanzan un dominio real y sostenible del idioma",
                "Se reporta el cumplimiento formal de la meta, pero sin lograr una competencia comunicativa duradera",
                "Las instituciones educativas dejan de reportar sus resultados a las autoridades"
              ],
              "respuesta": 1,
              "explicacion": "El texto contrasta 'cumplirse en el papel' con no lograr 'sostener un nivel de competencia comunicativa real... a mediano plazo', lo que indica un cumplimiento formal sin resultado sustantivo, no un dominio real (opción A) ni una falta de reporte (opción C)."
            },
            {
              "enunciado": "¿Cuál de las siguientes estrategias sería más coherente con superar la crítica implícita del texto?",
              "opciones": [
                "Aumentar solamente el número de talleres puntuales de corto plazo",
                "Invertir en formación certificada y sostenida de docentes de inglés en zonas rurales, no solo en metas de reporte",
                "Reducir las metas de bilingüismo únicamente en las zonas urbanas del país"
              ],
              "respuesta": 1,
              "explicacion": "Si el problema de fondo es la escasez de docentes certificados, la solución coherente ataca esa causa (formación sostenida), no simplemente aumenta talleres puntuales (que el texto ya identifica como insuficientes) ni reduce metas en zonas que no son las señaladas como problemáticas."
            }
          ]
        },
        {
          "id": "lc5",
          "texto": "Algunos rectores han comenzado a usar herramientas de inteligencia artificial para generar retroalimentación automática sobre los ensayos de los estudiantes. Los defensores argumentan que esto libera tiempo docente para atención individualizada. Los críticos advierten que la retroalimentación automatizada tiende a premiar la corrección formal —ortografía, estructura— por encima de la originalidad y la profundidad argumentativa, dos aspectos que una máquina evalúa peor que un lector humano experto.",
          "preguntas": [
            {
              "enunciado": "El punto de desacuerdo central entre defensores y críticos es:",
              "opciones": [
                "Si la inteligencia artificial debería usarse en algún proceso educativo",
                "Si los beneficios de tiempo liberado compensan las limitaciones de la IA para evaluar aspectos cualitativos como originalidad y profundidad",
                "Si los estudiantes deberían escribir ensayos como parte de su evaluación"
              ],
              "respuesta": 1,
              "explicacion": "El desacuerdo específico es sobre el balance costo-beneficio de esta aplicación puntual: tiempo liberado versus calidad de la evaluación en aspectos cualitativos, no sobre el uso de IA en general ni sobre si deben existir ensayos como tarea."
            },
            {
              "enunciado": "La palabra 'premiar' en el texto, referida a la retroalimentación automatizada, sugiere que la herramienta:",
              "opciones": [
                "Otorga mayor valoración a los aspectos formales que a los aspectos de contenido y originalidad",
                "Ofrece incentivos económicos a los estudiantes con mejores ensayos",
                "Corrige exclusivamente errores ortográficos sin evaluar ningún otro aspecto"
              ],
              "respuesta": 0,
              "explicacion": "'Premiar' aquí es figurado: significa que la herramienta valora más ese aspecto en su evaluación, no que otorgue incentivos económicos (opción B); tampoco implica que solo corrija ortografía, ya que el texto menciona también 'estructura' dentro de lo formal."
            },
            {
              "enunciado": "¿Qué uso de la herramienta sería más coherente con atender la crítica mencionada en el texto, sin renunciar del todo a sus beneficios?",
              "opciones": [
                "Usar la IA solo para retroalimentación formal (ortografía y estructura) y reservar la evaluación de originalidad y argumentación a un lector humano",
                "Eliminar por completo el uso de cualquier herramienta automatizada en la evaluación de ensayos",
                "Usar exclusivamente la retroalimentación de la IA, incluyendo la valoración de originalidad y profundidad"
              ],
              "respuesta": 0,
              "explicacion": "Esta opción aprovecha la fortaleza de la IA (aspectos formales) mientras reserva a un humano justamente lo que el texto señala como su debilidad (originalidad y profundidad), a diferencia de eliminarla del todo (pierde el beneficio) o de usarla para todo (ignora la crítica)."
            }
          ]
        },
        {
          "id": "lc6",
          "texto": "La educación inclusiva suele evaluarse por el número de estudiantes con discapacidad matriculados en aulas regulares, un indicador de cobertura. Pero la cobertura no equivale a la calidad de la experiencia educativa: un estudiante puede estar matriculado y, al mismo tiempo, pasar la mayor parte del tiempo sin comprender las actividades de su grupo por falta de ajustes razonables. Medir solo cobertura puede, paradójicamente, ocultar situaciones de exclusión dentro del aula regular.",
          "preguntas": [
            {
              "enunciado": "El texto plantea que medir la inclusión solo por cobertura es problemático porque:",
              "opciones": [
                "La cobertura es un indicador que no debería usarse nunca en educación",
                "Puede ocultar que un estudiante matriculado sigue excluido de facto por falta de ajustes razonables",
                "Los estudiantes con discapacidad no deberían estar en aulas regulares"
              ],
              "respuesta": 1,
              "explicacion": "El texto no rechaza la cobertura como indicador en general (opción A es demasiado extrema), ni sugiere separar a los estudiantes de las aulas regulares (opción C); su punto específico es que la cobertura, usada sola, puede esconder una exclusión real dentro del aula."
            },
            {
              "enunciado": "La palabra 'paradójicamente' en el texto señala que:",
              "opciones": [
                "Es sorprendente que un indicador pensado para medir inclusión pueda terminar ocultando exclusión",
                "Es normal y esperable que la cobertura y la exclusión vayan siempre de la mano",
                "No existe ninguna relación entre cobertura y exclusión educativa"
              ],
              "respuesta": 0,
              "explicacion": "'Paradójicamente' marca una contradicción llamativa entre lo que el indicador pretende mostrar (inclusión) y lo que puede terminar encubriendo (exclusión); no indica que sea lo esperado (opción B) ni niega la relación entre ambos conceptos (opción C)."
            },
            {
              "enunciado": "¿Qué indicador adicional sería más coherente con la crítica del texto?",
              "opciones": [
                "El número total de estudiantes matriculados en el sistema educativo",
                "Alguna medida de la participación y comprensión real de los estudiantes con discapacidad en las actividades del aula",
                "El número de aulas regulares existentes en el país"
              ],
              "respuesta": 1,
              "explicacion": "Si la crítica es que la cobertura no capta la calidad de la experiencia dentro del aula, el indicador complementario coherente debe medir justamente eso: participación y comprensión real, no cifras generales de matrícula o de infraestructura."
            }
          ]
        },
        {
          "id": "lc7",
          "texto": "Un estudio comparó dos estrategias para enseñar resolución de conflictos entre pares: talleres puntuales de una sola sesión frente a un programa integrado al currículo durante todo el año escolar. Los estudiantes de ambos grupos mostraron mejoras similares en pruebas de conocimiento sobre el tema inmediatamente después de la intervención. Sin embargo, seis meses después, solo el grupo del programa integrado mantuvo cambios observables en su comportamiento real durante los conflictos escolares.",
          "preguntas": [
            {
              "enunciado": "La conclusión más razonable que se puede extraer del estudio es que:",
              "opciones": [
                "El conocimiento sobre resolución de conflictos y el cambio de comportamiento sostenido no son lo mismo, y este último requiere una intervención más prolongada",
                "Los talleres puntuales de una sola sesión son completamente inútiles para cualquier propósito educativo",
                "El comportamiento de los estudiantes en conflictos no depende en absoluto del tipo de intervención recibida"
              ],
              "respuesta": 0,
              "explicacion": "El estudio muestra una diferencia clave: ambos grupos mejoraron en conocimiento a corto plazo, pero solo el programa integrado sostuvo el cambio conductual a los seis meses. Esto no hace 'inútiles' a los talleres puntuales (tuvieron efecto inmediato), y sí muestra que el tipo de intervención importa, contradiciendo la opción C."
            },
            {
              "enunciado": "El dato de que 'los estudiantes de ambos grupos mostraron mejoras similares... inmediatamente después' se usa en el texto para:",
              "opciones": [
                "Demostrar que ambas estrategias son igual de efectivas a largo plazo",
                "Establecer un punto de partida común, antes de mostrar la diferencia que aparece seis meses después",
                "Sugerir que la evaluación inmediata después de una intervención nunca es confiable"
              ],
              "respuesta": 1,
              "explicacion": "Ese dato funciona como línea base para resaltar, por contraste, la diferencia que emerge después: solo el programa integrado sostiene el cambio. No respalda que ambas sean igual de efectivas a largo plazo (es justo lo contrario) ni cuestiona la confiabilidad general de evaluaciones inmediatas."
            },
            {
              "enunciado": "Si una institución solo cuenta con recursos para una intervención breve, ¿qué implicación razonable se deriva del texto para sus expectativas?",
              "opciones": [
                "Puede esperar cambios de conocimiento a corto plazo, pero debería ser cautelosa sobre esperar cambios de comportamiento sostenidos",
                "Puede esperar exactamente los mismos resultados a largo plazo que un programa integrado de todo el año",
                "No debería intentar ninguna intervención breve, ya que no genera ningún beneficio"
              ],
              "respuesta": 0,
              "explicacion": "El texto sustenta que una intervención breve sí genera mejoras de conocimiento inmediatas (algo de valor), pero no sostiene el cambio de comportamiento a los seis meses, por lo que la expectativa razonable es matizada, no nula (opción C) ni equivalente a la intervención larga (opción B)."
            }
          ]
        },
        {
          "id": "lc8",
          "texto": "La gratuidad educativa eliminó las barreras de matrícula, pero no necesariamente los llamados 'costos ocultos' de la escolaridad: uniformes, transporte, materiales específicos y el costo de oportunidad de que un adolescente no trabaje. En zonas de alta vulnerabilidad, estos costos indirectos pueden pesar tanto o más que la matrícula misma a la hora de que una familia decida si sostiene la escolaridad de sus hijos.",
          "preguntas": [
            {
              "enunciado": "El texto sugiere que la gratuidad educativa, por sí sola, es:",
              "opciones": [
                "Una medida completamente inútil que no ha tenido ningún efecto positivo",
                "Una medida necesaria pero no suficiente para eliminar todas las barreras económicas de la escolaridad",
                "Una medida que ha eliminado por completo todos los costos asociados a la educación"
              ],
              "respuesta": 1,
              "explicacion": "El texto reconoce que la gratuidad 'eliminó las barreras de matrícula' (un logro), pero señala que persisten 'costos ocultos'; esto la describe como necesaria pero insuficiente, no como inútil (opción A) ni como una solución total (opción C)."
            },
            {
              "enunciado": "La expresión 'costo de oportunidad de que un adolescente no trabaje' se refiere a:",
              "opciones": [
                "El dinero que la familia deja de recibir porque el adolescente estudia en lugar de trabajar",
                "El precio de los materiales escolares que debe comprar la familia",
                "El costo del transporte público que usa el estudiante para ir al colegio"
              ],
              "respuesta": 0,
              "explicacion": "'Costo de oportunidad' es un concepto económico que se refiere a lo que se deja de ganar por elegir una opción (estudiar) sobre otra (trabajar); no se refiere a materiales ni a transporte, que el texto menciona como costos aparte, directos."
            },
            {
              "enunciado": "¿Qué política sería más coherente con la preocupación central del texto?",
              "opciones": [
                "Aumentar únicamente la inversión en infraestructura de los colegios",
                "Complementar la gratuidad de matrícula con subsidios que cubran transporte, uniformes o compensen el costo de oportunidad familiar",
                "Reducir el número de días de clase para disminuir los costos de transporte"
              ],
              "respuesta": 1,
              "explicacion": "Si la preocupación es que persisten costos indirectos más allá de la matrícula, la política coherente los atiende directamente (transporte, uniformes, compensación del costo de oportunidad), no invierte solo en infraestructura ni reduce días de clase, que afectaría el aprendizaje sin resolver el problema económico."
            }
          ]
        },
        {
          "id": "lc9",
          "texto": "La neuroeducación ha popularizado la idea de los 'estilos de aprendizaje' (visual, auditivo, kinestésico), según la cual cada estudiante aprende mejor si el contenido se le presenta en su estilo dominante. Sin embargo, revisiones sistemáticas de la evidencia neurocientífica no han encontrado sustento para esta idea: cuando se controla adecuadamente el experimento, adaptar la enseñanza al supuesto 'estilo' de cada estudiante no mejora sus resultados de aprendizaje en comparación con una enseñanza multimodal para todo el grupo.",
          "preguntas": [
            {
              "enunciado": "El propósito principal del texto es:",
              "opciones": [
                "Promover el uso de los estilos de aprendizaje en el aula como estrategia principal",
                "Cuestionar, con base en evidencia, la validez científica de adaptar la enseñanza a supuestos estilos de aprendizaje individuales",
                "Afirmar que la neurociencia no tiene ninguna aplicación posible en la educación"
              ],
              "respuesta": 1,
              "explicacion": "El texto cuestiona específicamente el mito de los estilos de aprendizaje citando revisiones sistemáticas, no rechaza toda la neurociencia aplicada a la educación (opción C, demasiado amplia) y ciertamente no promueve la idea que está refutando (opción A)."
            },
            {
              "enunciado": "La expresión 'cuando se controla adecuadamente el experimento' sugiere que:",
              "opciones": [
                "Los estudios mal diseñados podrían haber generado la impresión errónea de que los estilos de aprendizaje funcionan",
                "Todos los experimentos sobre estilos de aprendizaje llegan siempre a la misma conclusión sin excepción",
                "El control experimental es un tema irrelevante para evaluar esta teoría"
              ],
              "respuesta": 0,
              "explicacion": "La frase implica que el rigor metodológico importa: sin buen control, un estudio podría sugerir erróneamente que la teoría funciona; esto es coherente con que la evidencia rigurosa (bien controlada) no respalda la teoría, y contradice la idea de que el control experimental sea irrelevante."
            },
            {
              "enunciado": "Según el texto, ¿qué alternativa muestra mejores resultados frente a adaptar la enseñanza a estilos individuales?",
              "opciones": [
                "No enseñar ningún contenido de forma visual ni auditiva",
                "Una enseñanza multimodal dirigida a todo el grupo por igual",
                "Evaluar a cada estudiante para asignarle un estilo de aprendizaje fijo de por vida"
              ],
              "respuesta": 1,
              "explicacion": "El texto indica explícitamente que la enseñanza multimodal para todo el grupo no mostró peores resultados que adaptar el contenido al estilo individual, lo cual contradice tanto evitar formatos (opción A) como asignar un estilo fijo por evaluación (opción C, la práctica que el texto cuestiona)."
            }
          ]
        },
        {
          "id": "lc10",
          "texto": "Un secretario de educación municipal enfrenta una decisión: invertir el presupuesto adicional del año en construir dos colegios nuevos en zonas de expansión urbana, o en contratar más docentes de apoyo pedagógico para los colegios existentes con mayor tasa de repitencia. Los defensores de la primera opción argumentan que la cobertura futura es prioritaria; los defensores de la segunda sostienen que atender la calidad donde ya hay estudiantes matriculados tiene un efecto más inmediato y medible sobre los aprendizajes.",
          "preguntas": [
            {
              "enunciado": "El dilema que enfrenta el secretario de educación es fundamentalmente entre:",
              "opciones": [
                "Invertir en infraestructura para ampliar cobertura futura o invertir en apoyo pedagógico para mejorar la calidad actual",
                "Aumentar o disminuir el presupuesto total de educación del municipio",
                "Cerrar colegios existentes o mantenerlos exactamente como están"
              ],
              "respuesta": 0,
              "explicacion": "El texto plantea explícitamente dos usos posibles del mismo presupuesto adicional: cobertura futura (colegios nuevos) versus calidad actual (docentes de apoyo); no se trata de aumentar/disminuir presupuesto total ni de cerrar colegios, opciones que el texto no menciona."
            },
            {
              "enunciado": "El argumento de quienes defienden contratar docentes de apoyo se basa principalmente en que esta opción:",
              "opciones": [
                "Beneficia a estudiantes que aún no existen en el sistema educativo municipal",
                "Tiene un efecto más inmediato y medible sobre los estudiantes que ya están matriculados",
                "Cuesta significativamente menos dinero que construir colegios nuevos"
              ],
              "respuesta": 1,
              "explicacion": "El texto atribuye a esta postura el argumento del 'efecto más inmediato y medible' sobre estudiantes actuales, no una comparación de costos (que el texto no menciona) ni un beneficio a futuros estudiantes, que es precisamente el argumento de la otra postura."
            },
            {
              "enunciado": "¿Cuál sería una tercera vía razonable que el texto no descarta explícitamente, pero que podría conciliar ambas posturas?",
              "opciones": [
                "Ignorar el problema y postergar la decisión indefinidamente",
                "Distribuir el presupuesto entre ambas prioridades según un diagnóstico de necesidades más urgentes en cada zona",
                "Eliminar por completo cualquier inversión en infraestructura educativa en el municipio"
              ],
              "respuesta": 1,
              "explicacion": "El texto presenta el dilema como una disyuntiva entre dos posturas defendidas, pero no afirma que deba elegirse exclusivamente una; una distribución basada en diagnóstico es una vía intermedia razonable, mientras que postergar la decisión (opción A) o eliminar la infraestructura por completo (opción C) no resuelven el dilema planteado."
            }
          ]
        }
      ]
    },
    {
      "id": "rc",
      "nombre": "Razonamiento cuantitativo",
      "descripcion": "10 casos con datos de contexto educativo, 3 preguntas cada uno. Las opciones incluyen errores de cálculo típicos como distractores cercanos.",
      "casos": [
        {
          "id": "rc1",
          "texto": "Una institución educativa tiene 1.240 estudiantes matriculados. El 45% cursa primaria, el 35% cursa secundaria y el resto cursa media. De los estudiantes de media, el 20% está matriculado en el programa de articulación con el SENA.",
          "preguntas": [
            {
              "enunciado": "¿Cuántos estudiantes cursan media?",
              "opciones": [
                "248",
                "216",
                "372"
              ],
              "respuesta": 0,
              "explicacion": "Media = 100% - 45% - 35% = 20% de 1.240 = 248 estudiantes. (216 resulta de un error al tomar 20% de 1.080; 372 de confundir con el 30%)."
            },
            {
              "enunciado": "¿Cuántos estudiantes de media están matriculados en el programa de articulación con el SENA?",
              "opciones": [
                "43",
                "50",
                "49"
              ],
              "respuesta": 1,
              "explicacion": "20% de 248 = 49.6, que se aproxima a 50 estudiantes por redondeo estándar."
            },
            {
              "enunciado": "Si el número de estudiantes de primaria aumenta en 62 el próximo año y el resto se mantiene igual, ¿qué porcentaje del nuevo total representará la primaria, aproximadamente?",
              "opciones": [
                "45%",
                "47%",
                "49%"
              ],
              "respuesta": 1,
              "explicacion": "Primaria actual = 45% de 1.240 = 558; nueva primaria = 558+62 = 620. Nuevo total = 1.240+62 = 1.302. 620/1.302 ≈ 47.6%, el valor más cercano entre las opciones es 47%."
            }
          ]
        },
        {
          "id": "rc2",
          "texto": "El presupuesto anual de un colegio es de $960.000.000. Se distribuye así: 50% en nómina docente, 20% en mantenimiento de infraestructura, 18% en materiales pedagógicos y el resto en actividades extracurriculares.",
          "preguntas": [
            {
              "enunciado": "¿Cuánto dinero se destina a actividades extracurriculares?",
              "opciones": [
                "$96.000.000",
                "$115.200.000",
                "$76.800.000"
              ],
              "respuesta": 1,
              "explicacion": "Extracurriculares = 100% - 50% - 20% - 18% = 12% de 960.000.000 = 115.200.000."
            },
            {
              "enunciado": "¿Cuánto dinero más se destina a nómina docente que a mantenimiento de infraestructura?",
              "opciones": [
                "$288.000.000",
                "$192.000.000",
                "$96.000.000"
              ],
              "respuesta": 0,
              "explicacion": "Nómina = 50% de 960.000.000 = 480.000.000. Mantenimiento = 20% = 192.000.000. Diferencia = 480.000.000 - 192.000.000 = 288.000.000."
            },
            {
              "enunciado": "Si el próximo año el presupuesto total aumenta un 10% y la proporción destinada a materiales pedagógicos se mantiene en 18%, ¿cuánto se destinará a materiales el próximo año?",
              "opciones": [
                "$190.080.000",
                "$172.800.000",
                "$182.688.000"
              ],
              "respuesta": 0,
              "explicacion": "Nuevo presupuesto = 960.000.000 × 1.10 = 1.056.000.000. 18% de 1.056.000.000 = 190.080.000."
            }
          ]
        },
        {
          "id": "rc3",
          "texto": "En una prueba diagnóstica de 80 preguntas, un grupo de 25 aspirantes obtuvo los siguientes resultados: 5 aspirantes acertaron menos de 40 preguntas, 12 aspirantes acertaron entre 40 y 60 preguntas, y el resto acertó más de 60 preguntas.",
          "preguntas": [
            {
              "enunciado": "¿Cuántos aspirantes acertaron más de 60 preguntas?",
              "opciones": [
                "8",
                "9",
                "7"
              ],
              "respuesta": 0,
              "explicacion": "25 - 5 - 12 = 8 aspirantes."
            },
            {
              "enunciado": "¿Qué porcentaje del grupo acertó entre 40 y 60 preguntas?",
              "opciones": [
                "44%",
                "48%",
                "50%"
              ],
              "respuesta": 1,
              "explicacion": "12/25 = 0.48 = 48%."
            },
            {
              "enunciado": "Si los 8 aspirantes que acertaron más de 60 preguntas tuvieron, en promedio, 68 respuestas correctas, ¿cuántas respuestas correctas sumaron entre todos ellos?",
              "opciones": [
                "544",
                "536",
                "552"
              ],
              "respuesta": 0,
              "explicacion": "8 × 68 = 544."
            }
          ]
        },
        {
          "id": "rc4",
          "texto": "Una biblioteca escolar tiene 3.600 libros. El 40% son de literatura, el 25% son de ciencias, el 15% son de historia y el resto se reparte en partes iguales entre 4 categorías adicionales.",
          "preguntas": [
            {
              "enunciado": "¿Cuántos libros hay en cada una de las 4 categorías adicionales?",
              "opciones": [
                "180",
                "216",
                "144"
              ],
              "respuesta": 0,
              "explicacion": "Porcentaje restante = 100-40-25-15 = 20% de 3.600 = 720 libros, repartidos entre 4 categorías = 720/4 = 180 cada una."
            },
            {
              "enunciado": "¿Cuántos libros más hay de literatura que de historia?",
              "opciones": [
                "900",
                "1.440",
                "540"
              ],
              "respuesta": 0,
              "explicacion": "Literatura = 40% de 3.600 = 1.440. Historia = 15% de 3.600 = 540. Diferencia = 1.440-540 = 900."
            },
            {
              "enunciado": "Si se donan 288 libros de ciencias y no se repone ninguno, ¿qué porcentaje del total de libros representará ahora la categoría de ciencias?",
              "opciones": [
                "18%",
                "20%",
                "17%"
              ],
              "respuesta": 0,
              "explicacion": "Ciencias actuales = 25% de 3.600 = 900. Nuevas ciencias = 900-288 = 612. Nuevo total = 3.600-288 = 3.312. 612/3.312 ≈ 18.5%, el valor más cercano es 18%."
            }
          ]
        },
        {
          "id": "rc5",
          "texto": "Un docente aplica una prueba con 3 secciones: la sección 1 tiene 25 preguntas y vale 30% de la nota; la sección 2 tiene 15 preguntas y vale 30% de la nota; la sección 3 tiene 20 preguntas y vale 40% de la nota. Un estudiante acierta el 80% de la sección 1, el 60% de la sección 2 y el 90% de la sección 3.",
          "preguntas": [
            {
              "enunciado": "¿Cuántas preguntas acertó el estudiante en total, sumando las tres secciones?",
              "opciones": [
                "47",
                "49",
                "45"
              ],
              "respuesta": 0,
              "explicacion": "Sección 1: 80% de 25 = 20. Sección 2: 60% de 15 = 9. Sección 3: 90% de 20 = 18. Total = 20+9+18 = 47."
            },
            {
              "enunciado": "Si la nota máxima posible es 5.0, ¿qué nota obtuvo el estudiante según la ponderación de cada sección?",
              "opciones": [
                "4.02",
                "3.9",
                "4.14"
              ],
              "respuesta": 1,
              "explicacion": "Sección 1: 0.80×30%=24%. Sección 2: 0.60×30%=18%. Sección 3: 0.90×40%=36%. Total=24+18+36=78% de 5.0 = 3.9."
            },
            {
              "enunciado": "¿En cuál sección tuvo el estudiante el menor porcentaje de aciertos?",
              "opciones": [
                "Sección 1",
                "Sección 2",
                "Sección 3"
              ],
              "respuesta": 1,
              "explicacion": "Los porcentajes de acierto fueron 80%, 60% y 90% respectivamente; el menor corresponde a la sección 2."
            }
          ]
        },
        {
          "id": "rc6",
          "texto": "Un colegio proyecta el crecimiento de su matrícula: tiene actualmente 500 estudiantes y espera un crecimiento del 8% anual durante los próximos 2 años.",
          "preguntas": [
            {
              "enunciado": "¿Cuántos estudiantes tendrá el colegio al final del primer año?",
              "opciones": [
                "540",
                "580",
                "508"
              ],
              "respuesta": 0,
              "explicacion": "500 × 1.08 = 540."
            },
            {
              "enunciado": "¿Cuántos estudiantes tendrá el colegio al final del segundo año, aplicando el crecimiento compuesto?",
              "opciones": [
                "583",
                "580",
                "592"
              ],
              "respuesta": 0,
              "explicacion": "540 × 1.08 = 583.2 ≈ 583. (580 resulta de sumar 8% de 500 dos veces, un error común de crecimiento simple en vez de compuesto)."
            },
            {
              "enunciado": "¿Cuál es el crecimiento total aproximado, en número de estudiantes, entre el inicio y el final del segundo año?",
              "opciones": [
                "83",
                "80",
                "92"
              ],
              "respuesta": 0,
              "explicacion": "583 - 500 = 83 estudiantes adicionales."
            }
          ]
        },
        {
          "id": "rc7",
          "texto": "En una jornada de evaluación docente, cada evaluador revisa en promedio 6 formatos por hora. Se cuenta con 5 evaluadores trabajando simultáneamente durante una jornada de 7 horas.",
          "preguntas": [
            {
              "enunciado": "¿Cuántos formatos puede revisar un solo evaluador durante toda la jornada?",
              "opciones": [
                "42",
                "35",
                "48"
              ],
              "respuesta": 0,
              "explicacion": "6 formatos/hora × 7 horas = 42 formatos."
            },
            {
              "enunciado": "¿Cuántos formatos pueden revisar los 5 evaluadores en total durante la jornada?",
              "opciones": [
                "210",
                "175",
                "245"
              ],
              "respuesta": 0,
              "explicacion": "42 formatos por evaluador × 5 evaluadores = 210 formatos."
            },
            {
              "enunciado": "Si se necesitan revisar 315 formatos en total y se mantiene el mismo ritmo por evaluador, ¿cuántos evaluadores adicionales, como mínimo, se necesitan para completar el trabajo en la misma jornada de 7 horas?",
              "opciones": [
                "3",
                "2",
                "4"
              ],
              "respuesta": 0,
              "explicacion": "315 formatos ÷ 42 formatos por evaluador = 7.5, es decir, se necesitan 8 evaluadores en total; como ya hay 5, se necesitan 3 adicionales (redondeando hacia arriba porque 7 evaluadores no alcanzarían a cubrir el total)."
            }
          ]
        },
        {
          "id": "rc8",
          "texto": "Un aspirante practica con simulacros: en el primero acertó 32 de 60 preguntas, en el segundo acertó 39 de 60, y en el tercero acertó 45 de 60.",
          "preguntas": [
            {
              "enunciado": "¿Cuál fue su porcentaje de aciertos en el segundo simulacro?",
              "opciones": [
                "65%",
                "63%",
                "68%"
              ],
              "respuesta": 0,
              "explicacion": "39/60 = 0.65 = 65%."
            },
            {
              "enunciado": "¿Cuál fue el aumento en puntos porcentuales entre el primer y el tercer simulacro?",
              "opciones": [
                "21.7 puntos porcentuales",
                "13 puntos porcentuales",
                "18.3 puntos porcentuales"
              ],
              "respuesta": 0,
              "explicacion": "Primer simulacro: 32/60≈53.3%. Tercer simulacro: 45/60=75%. Diferencia = 75-53.3=21.7 puntos porcentuales."
            },
            {
              "enunciado": "Si mantiene el mismo ritmo de mejora (en puntos porcentuales) entre el segundo y el tercer simulacro para un cuarto simulacro, ¿aproximadamente qué porcentaje de aciertos alcanzaría?",
              "opciones": [
                "85%",
                "80%",
                "90%"
              ],
              "respuesta": 0,
              "explicacion": "Segundo: 65%. Tercero: 75%. Aumento = 10 puntos porcentuales. Aplicando el mismo aumento: 75+10=85%."
            }
          ]
        },
        {
          "id": "rc9",
          "texto": "Una secretaría de educación distribuye 480 tabletas entre 3 colegios en proporción a su número de estudiantes: el colegio A tiene 900 estudiantes, el colegio B tiene 600 estudiantes y el colegio C tiene 300 estudiantes.",
          "preguntas": [
            {
              "enunciado": "¿Cuántas tabletas recibe el colegio A?",
              "opciones": [
                "240",
                "160",
                "200"
              ],
              "respuesta": 0,
              "explicacion": "Total estudiantes = 900+600+300=1.800. Proporción de A = 900/1.800=1/2. Tabletas de A = 480×1/2=240."
            },
            {
              "enunciado": "¿Cuántas tabletas recibe el colegio C?",
              "opciones": [
                "80",
                "96",
                "60"
              ],
              "respuesta": 0,
              "explicacion": "Proporción de C = 300/1.800=1/6. Tabletas de C = 480×1/6=80."
            },
            {
              "enunciado": "¿Cuántas tabletas más recibe el colegio B que el colegio C?",
              "opciones": [
                "80",
                "60",
                "100"
              ],
              "respuesta": 0,
              "explicacion": "Proporción de B = 600/1.800=1/3. Tabletas de B = 480×1/3=160. Diferencia con C (80) = 160-80=80."
            }
          ]
        },
        {
          "id": "rc10",
          "texto": "Un estudio de deserción escolar en un municipio reporta que, de 4.500 estudiantes matriculados al inicio del año, el 6% desertó en el primer semestre. De los que continuaron, un 3% adicional desertó en el segundo semestre.",
          "preguntas": [
            {
              "enunciado": "¿Cuántos estudiantes desertaron en el primer semestre?",
              "opciones": [
                "270",
                "135",
                "300"
              ],
              "respuesta": 0,
              "explicacion": "6% de 4.500 = 270 estudiantes."
            },
            {
              "enunciado": "¿Cuántos estudiantes continuaban matriculados al iniciar el segundo semestre?",
              "opciones": [
                "4.230",
                "4.365",
                "4.200"
              ],
              "respuesta": 0,
              "explicacion": "4.500 - 270 = 4.230 estudiantes."
            },
            {
              "enunciado": "¿Cuántos estudiantes en total (sumando ambos semestres) desertaron durante el año?",
              "opciones": [
                "397",
                "405",
                "270"
              ],
              "respuesta": 0,
              "explicacion": "Segundo semestre: 3% de 4.230 = 126.9. Total desertores = 270+126.9=396.9, aproximadamente 397 estudiantes. (405 resulta de calcular erróneamente 3% sobre los 4.500 originales en vez de sobre los 4.230 restantes)."
            }
          ]
        }
      ]
    },
    {
      "id": "ped",
      "nombre": "Pedagogía y legislación educativa (casuística)",
      "descripcion": "10 casos escolares con 3 preguntas cada uno, que combinan decisión pedagógica y marco normativo. Opciones de tres alternativas con distractores muy cercanos.",
      "casos": [
        {
          "id": "ped1",
          "texto": "En una institución oficial, un docente de básica primaria decide, por iniciativa propia, dejar de calificar con notas numéricas y usar solo observaciones cualitativas durante todo el año, sin informar al consejo académico ni ajustar el sistema institucional de evaluación (SIE) aprobado en el PEI.",
          "preguntas": [
            {
              "enunciado": "Desde el punto de vista normativo, la actuación del docente es problemática principalmente porque:",
              "opciones": [
                "La evaluación cualitativa está prohibida en la educación básica primaria colombiana",
                "El sistema de evaluación de una institución debe seguir el SIE aprobado institucionalmente, y cualquier cambio requiere el conducto del consejo académico, no una decisión individual",
                "Los docentes no tienen ninguna autonomía pedagógica dentro del aula"
              ],
              "respuesta": 1,
              "explicacion": "La Ley 115 y su reglamentación otorgan autonomía pedagógica a las instituciones para definir su SIE dentro del PEI, pero ese sistema es institucional y colegiado (consejo académico), no una decisión unilateral de un docente; la evaluación cualitativa en sí no está prohibida (opción A es falsa), y sí existe autonomía docente, aunque no ilimitada (opción C es una generalización incorrecta)."
            },
            {
              "enunciado": "¿Cuál sería el procedimiento correcto si el docente considera pedagógicamente valiosa esa estrategia de evaluación?",
              "opciones": [
                "Aplicarla directamente porque su criterio pedagógico profesional es suficiente autorización",
                "Proponerla formalmente ante el consejo académico para su análisis y, si corresponde, su incorporación al SIE institucional",
                "Aplicarla solo con los estudiantes con mejor rendimiento, sin informar a nadie"
              ],
              "respuesta": 1,
              "explicacion": "El conducto correcto para modificar aspectos del sistema de evaluación institucional es llevarlo al consejo académico, instancia colegiada responsable del SIE; ni la aplicación unilateral (opción A) ni una aplicación parcial y no informada (opción C) siguen el procedimiento institucional correcto."
            },
            {
              "enunciado": "Si los padres de familia reclaman porque no entienden cómo se está evaluando a sus hijos, ¿qué principio se está viendo comprometido con la actuación original del docente?",
              "opciones": [
                "El derecho de los padres y estudiantes a conocer los criterios de evaluación previamente establecidos y socializados",
                "El derecho de los estudiantes a recibir clases en jornada única",
                "El derecho de los docentes a la estabilidad laboral en su cargo"
              ],
              "respuesta": 0,
              "explicacion": "Un cambio no socializado en la evaluación afecta el derecho de la comunidad educativa a conocer con claridad los criterios de evaluación vigentes, un principio básico del debido proceso evaluativo; no tiene relación con la jornada única ni con la estabilidad laboral del docente."
            }
          ]
        },
        {
          "id": "ped2",
          "texto": "Un estudiante de grado noveno, diagnosticado con trastorno del espectro autista, tiene un Plan Individual de Ajustes Razonables (PIAR) que establece tiempo adicional en las evaluaciones escritas. Un docente de una asignatura se niega a aplicarlo porque, según argumenta, 'sería injusto para los demás estudiantes que no tienen ese beneficio'.",
          "preguntas": [
            {
              "enunciado": "La posición del docente es normativamente incorrecta porque:",
              "opciones": [
                "Los ajustes razonables definidos en un PIAR son de obligatorio cumplimiento por todos los docentes que atienden al estudiante, y no constituyen un trato injusto sino una condición de equidad",
                "Todos los estudiantes del curso deberían recibir automáticamente el mismo tiempo adicional que el estudiante con PIAR",
                "El PIAR solo aplica en la asignatura donde fue diseñado originalmente, no en las demás"
              ],
              "respuesta": 0,
              "explicacion": "El marco de educación inclusiva vigente establece que los ajustes razonables del PIAR son transversales y obligatorios para el cuerpo docente que atiende al estudiante; no se trata de dar el mismo trato a todos (opción B, que anularía el sentido del ajuste individual) ni de limitarlo a una sola asignatura (opción C)."
            },
            {
              "enunciado": "El concepto de 'equidad' que sustenta el uso de ajustes razonables se diferencia del de 'igualdad' en que:",
              "opciones": [
                "La equidad busca dar exactamente el mismo trato a todos los estudiantes sin excepción",
                "La equidad reconoce que estudiantes con necesidades distintas pueden requerir apoyos distintos para acceder al mismo derecho a aprender",
                "La equidad y la igualdad son sinónimos exactos en el contexto educativo"
              ],
              "respuesta": 1,
              "explicacion": "La equidad, a diferencia de la igualdad de trato uniforme, reconoce diferencias de partida y ajusta los apoyos para que todos accedan efectivamente al derecho a aprender, que es justamente el fundamento de los ajustes razonables como el tiempo adicional."
            },
            {
              "enunciado": "Si el docente insiste en no aplicar el PIAR, ¿cuál es la instancia institucional más pertinente para que el caso se resuelva?",
              "opciones": [
                "El propio docente, ya que tiene autonomía absoluta para decidir sobre su asignatura",
                "Coordinación académica u orientación escolar, que deben velar por el cumplimiento del PIAR y mediar con el docente",
                "Los compañeros de curso del estudiante, mediante una votación"
              ],
              "respuesta": 1,
              "explicacion": "El seguimiento del cumplimiento de los PIAR corresponde a las instancias de coordinación y orientación escolar de la institución, que deben mediar y garantizar su aplicación; no es una decisión que dependa de la autonomía absoluta del docente (opción A, incorrecta) ni de los compañeros de curso (opción C, absurda en este contexto)."
            }
          ]
        },
        {
          "id": "ped3",
          "texto": "En un colegio, el manual de convivencia establece que las faltas leves se resuelven con un diálogo formativo y registro en el observador, mientras que las faltas graves requieren la activación del comité escolar de convivencia. Un estudiante agrede físicamente a un compañero en medio de una discusión, dejándole una lesión leve. El coordinador decide resolverlo únicamente con una anotación en el observador, sin activar el comité.",
          "preguntas": [
            {
              "enunciado": "La decisión del coordinador es problemática porque:",
              "opciones": [
                "Una agresión física con lesión, según la Ley 1620 de convivencia escolar, se clasifica típicamente como situación tipo II o III, que requiere activar el comité escolar de convivencia, no solo un registro",
                "El observador del estudiante nunca debe usarse para faltas graves",
                "Solo el rector, y no el coordinador, puede tomar decisiones sobre convivencia escolar"
              ],
              "respuesta": 0,
              "explicacion": "La Ley 1620 y su decreto reglamentario clasifican las situaciones de convivencia por tipos según su gravedad; una agresión física con lesión corresponde típicamente a un tipo II o III, que exige la intervención del comité escolar de convivencia, no solo un registro individual; el observador sí puede usarse en faltas graves como parte del proceso (opción B es falsa), y la normativa no reserva esta decisión únicamente al rector (opción C)."
            },
            {
              "enunciado": "¿Cuál es la función principal del comité escolar de convivencia en un caso como este?",
              "opciones": [
                "Sancionar penalmente al estudiante agresor",
                "Activar la ruta de atención integral, analizar el caso y definir acciones pedagógicas y de seguimiento para todas las partes involucradas",
                "Expulsar automáticamente al estudiante agresor sin más análisis"
              ],
              "respuesta": 1,
              "explicacion": "El comité escolar de convivencia tiene una función de análisis, activación de rutas de atención y seguimiento pedagógico, no de sanción penal (que no le compete, opción A) ni de expulsión automática sin análisis previo (opción C), lo cual violaría el debido proceso."
            },
            {
              "enunciado": "Si los padres del estudiante agredido consideran que la respuesta institucional fue insuficiente, ¿qué instancia posterior podrían acudir dentro del sistema, según el enfoque de la ruta de atención integral?",
              "opciones": [
                "Ninguna, porque la decisión del coordinador es definitiva e inapelable",
                "Otras entidades del sistema nacional de convivencia escolar, como la secretaría de educación, si el caso lo amerita",
                "Directamente un medio de comunicación, sin agotar ningún canal institucional"
              ],
              "respuesta": 1,
              "explicacion": "La ruta de atención integral contempla niveles de intervención más allá de la institución educativa, incluyendo la secretaría de educación u otras entidades del sistema, cuando el caso lo amerita; no es cierto que la decisión de un coordinador sea inapelable (opción A), y acudir directamente a medios sin agotar canales institucionales no es la vía prevista por la ruta (opción C)."
            }
          ]
        },
        {
          "id": "ped4",
          "texto": "Una docente nueva en una institución quiere implementar el aprendizaje basado en proyectos como metodología principal en su asignatura, apartándose del enfoque más tradicional que han usado sus colegas del área durante años. El jefe de área le indica que cualquier cambio metodológico relevante debe articularse con el PEI y discutirse en la reunión de área antes de aplicarse en el aula.",
          "preguntas": [
            {
              "enunciado": "La exigencia del jefe de área tiene sustento en que:",
              "opciones": [
                "El PEI es un documento meramente simbólico que no vincula las decisiones pedagógicas concretas del aula",
                "El PEI orienta la identidad pedagógica institucional, y las decisiones metodológicas relevantes deben ser coherentes con él y discutirse en las instancias colegiadas correspondientes",
                "Los docentes nuevos nunca pueden proponer cambios metodológicos en su primer año de vinculación"
              ],
              "respuesta": 1,
              "explicacion": "El PEI define la identidad y el horizonte pedagógico institucional y vincula las decisiones metodológicas relevantes, que deben articularse en instancias colegiadas como la reunión de área; no es un documento simbólico sin efecto (opción A), y la normativa no prohíbe a un docente nuevo proponer cambios (opción C es una restricción inventada)."
            },
            {
              "enunciado": "Si la docente considera que el aprendizaje basado en proyectos beneficiará a sus estudiantes, ¿cuál es la actuación más coherente con el marco institucional?",
              "opciones": [
                "Aplicarlo de inmediato en su aula sin esperar ninguna discusión, porque su convicción pedagógica es razón suficiente",
                "Presentar la propuesta con su fundamentación pedagógica en la reunión de área, buscando articularla con el PEI antes de implementarla ampliamente",
                "Desistir por completo de la idea, ya que cualquier cambio metodológico está prohibido en la institución"
              ],
              "respuesta": 1,
              "explicacion": "La actuación coherente respeta tanto su iniciativa pedagógica como el conducto institucional: presentar y fundamentar la propuesta en la instancia colegiada correspondiente, sin actuar unilateralmente (opción A) ni renunciar sin más a una idea pedagógicamente válida (opción C, que además asume erróneamente una prohibición absoluta)."
            },
            {
              "enunciado": "¿Qué elemento del PEI sería más relevante revisar para evaluar la pertinencia de esta propuesta metodológica?",
              "opciones": [
                "El modelo pedagógico y el enfoque curricular institucional declarados en el PEI",
                "El calendario de vacaciones del año escolar",
                "El manual de convivencia en su capítulo de sanciones disciplinarias"
              ],
              "respuesta": 0,
              "explicacion": "La coherencia de una metodología con el PEI se evalúa frente al modelo pedagógico y el enfoque curricular declarados, no frente al calendario escolar ni al régimen disciplinario, que son componentes distintos del PEI sin relación directa con esta decisión metodológica."
            }
          ]
        },
        {
          "id": "ped5",
          "texto": "En una institución rural con aulas multigrado, la secretaría de educación exige aplicar el mismo plan de área diseñado centralizadamente para instituciones urbanas de un solo grado por aula, sin adaptaciones. La rectora considera que esto desconoce las particularidades del modelo multigrado y afecta la calidad pedagógica.",
          "preguntas": [
            {
              "enunciado": "El argumento de la rectora se sustenta mejor en el principio de:",
              "opciones": [
                "Centralización curricular absoluta, según la cual todas las instituciones deben aplicar exactamente el mismo currículo sin excepción",
                "Autonomía escolar, que permite adaptar los lineamientos curriculares nacionales a las particularidades del contexto institucional, dentro del marco de los fines generales de la educación",
                "Libre cátedra individual de cada docente, sin ningún marco institucional que la oriente"
              ],
              "respuesta": 1,
              "explicacion": "La Ley 115 reconoce la autonomía escolar para adaptar los lineamientos curriculares nacionales a las particularidades del contexto (como el modelo multigrado rural), siempre dentro del marco de los fines generales de la educación; no se trata de una centralización absoluta (opción A, que es justo lo que la rectora cuestiona) ni de libre cátedra individual sin marco institucional (opción C)."
            },
            {
              "enunciado": "¿Cuál sería la actuación institucional más adecuada frente a esta exigencia de la secretaría de educación?",
              "opciones": [
                "Aplicar el plan de área sin ningún cuestionamiento, ya que toda instrucción de la secretaría es de cumplimiento absoluto sin posibilidad de diálogo",
                "Ignorar por completo la instrucción y aplicar unilateralmente lo que la institución considere conveniente",
                "Formalizar ante la secretaría de educación una propuesta de adaptación curricular fundamentada en las particularidades del modelo multigrado, apelando a la autonomía escolar"
              ],
              "respuesta": 2,
              "explicacion": "La vía institucionalmente adecuada combina el respeto por el conducto regular con el ejercicio legítimo de la autonomía escolar: formalizar una propuesta fundamentada de adaptación, no simplemente obedecer sin diálogo (opción A) ni desconocer unilateralmente la instrucción sin ningún proceso formal (opción B)."
            },
            {
              "enunciado": "¿Qué particularidad del modelo multigrado justificaría con mayor fuerza una adaptación curricular respecto al modelo urbano de un grado por aula?",
              "opciones": [
                "Que en el modelo multigrado un mismo docente atiende simultáneamente a estudiantes de diferentes grados y niveles de desarrollo en el aula",
                "Que los estudiantes rurales tienen, en promedio, menor capacidad de aprendizaje que los urbanos",
                "Que el modelo multigrado no requiere ningún tipo de planeación pedagógica formal"
              ],
              "respuesta": 0,
              "explicacion": "La particularidad estructural del modelo multigrado —un docente atendiendo simultáneamente distintos grados y niveles— es la razón pedagógica legítima para adaptar el plan de área; la opción B es una afirmación discriminatoria y sin sustento, y la opción C es falsa, ya que el modelo multigrado sí requiere planeación, incluso más compleja."
            }
          ]
        },
        {
          "id": "ped6",
          "texto": "Un docente orientador se entera, por un comentario de un estudiante de grado octavo, de que este consume alcohol los fines de semana con su grupo de amigos, sin que esto haya afectado hasta ahora su desempeño académico ni su comportamiento en el colegio.",
          "preguntas": [
            {
              "enunciado": "Desde el enfoque de protección integral de la Ley 1098 de 2006 (Código de Infancia y Adolescencia), la actuación más adecuada del orientador es:",
              "opciones": [
                "No hacer nada porque el consumo ocurre fuera del colegio y no ha afectado el desempeño académico",
                "Abordar el tema con el estudiante desde un enfoque preventivo y de acompañamiento, e informar según el protocolo institucional para situaciones de riesgo, sin esperar a que haya un impacto académico visible",
                "Reportar el caso directamente a la policía sin ningún abordaje previo con el estudiante ni la familia"
              ],
              "respuesta": 1,
              "explicacion": "El enfoque de protección integral exige actuar preventivamente ante situaciones de riesgo para un menor, sin esperar a que se traduzcan en un problema académico visible; no hacer nada (opción A) desatiende ese deber de protección, y reportar directamente a la policía sin ningún abordaje previo (opción C) no es proporcional ni sigue el protocolo institucional de acompañamiento."
            },
            {
              "enunciado": "¿Por qué el hecho de que 'no haya afectado el desempeño académico' no es un argumento válido para no actuar?",
              "opciones": [
                "Porque el bienestar y la protección del menor son un fin en sí mismos, independientes de si hay o no impacto académico visible en el momento",
                "Porque todos los estudiantes con bajo consumo de alcohol tienen automáticamente bajo rendimiento académico",
                "Porque la ley exige que el orientador solo actúe cuando hay un impacto académico comprobado"
              ],
              "respuesta": 0,
              "explicacion": "El interés superior del niño y la protección integral no están condicionados a que exista un impacto académico: el bienestar del menor es un fin en sí mismo que amerita atención preventiva; las otras dos opciones son afirmaciones falsas sobre la relación entre consumo y rendimiento, o sobre el alcance de la obligación del orientador."
            },
            {
              "enunciado": "¿Cuál de las siguientes acciones sería más coherente con un abordaje preventivo y no punitivo del caso?",
              "opciones": [
                "Sancionar disciplinariamente al estudiante por una conducta ocurrida fuera del colegio",
                "Generar un espacio de diálogo confidencial con el estudiante y, de ser pertinente, involucrar a la familia y a profesionales de apoyo, sin exponerlo frente al curso",
                "Comentar la situación con otros docentes del colegio para que estén atentos, sin informar a nadie más"
              ],
              "respuesta": 1,
              "explicacion": "Un abordaje preventivo y respetuoso combina el diálogo confidencial con la posible activación de redes de apoyo (familia, profesionales), sin recurrir a sanciones por hechos fuera del ámbito escolar (opción A) ni a la difusión informal del caso entre docentes sin un protocolo claro (opción C, que compromete la confidencialidad del estudiante)."
            }
          ]
        },
        {
          "id": "ped7",
          "texto": "El consejo directivo de una institución oficial debe aprobar el uso de los recursos del fondo de servicios educativos para el siguiente trimestre. Un rector propone destinar la mayoría de esos recursos a la compra de equipos audiovisuales para su propia oficina administrativa, argumentando que mejorará la gestión institucional.",
          "preguntas": [
            {
              "enunciado": "Desde el punto de vista del gobierno escolar, la propuesta del rector debe:",
              "opciones": [
                "Aplicarse directamente, ya que el rector tiene autoridad exclusiva sobre el fondo de servicios educativos",
                "Someterse a la discusión y aprobación del consejo directivo, órgano colegiado responsable de la administración de esos recursos",
                "Aprobarse automáticamente porque cualquier gasto que beneficie la gestión institucional está justificado"
              ],
              "respuesta": 1,
              "explicacion": "La administración del fondo de servicios educativos corresponde al consejo directivo como órgano de gobierno escolar, no a una decisión unilateral del rector (opción A); y el hecho de beneficiar la gestión institucional no exime de pasar por la discusión y aprobación colegiada (opción C)."
            },
            {
              "enunciado": "¿Qué criterio sería más pertinente que el consejo directivo aplique para evaluar esta propuesta frente a otras posibles inversiones?",
              "opciones": [
                "El impacto y la pertinencia de la inversión frente a las necesidades pedagógicas y de funcionamiento priorizadas por la institución",
                "La preferencia personal del rector sobre el tipo de equipos que le gustaría tener",
                "El hecho de que sea más rápido comprar equipos audiovisuales que otro tipo de recursos"
              ],
              "respuesta": 0,
              "explicacion": "Las decisiones sobre el fondo de servicios educativos deben responder a las necesidades pedagógicas y de funcionamiento priorizadas institucionalmente, no a preferencias personales de un directivo (opción B) ni a criterios de mera rapidez de ejecución (opción C)."
            },
            {
              "enunciado": "Si el consejo directivo identifica que la propuesta no prioriza necesidades pedagógicas urgentes de la institución, ¿cuál sería su actuación más adecuada?",
              "opciones": [
                "Aprobar la propuesta de todas formas, para no generar un conflicto con el rector",
                "No pronunciarse y dejar que la decisión quede en manos exclusivas del rector",
                "Objetar o ajustar la propuesta, proponiendo una destinación de recursos alineada con las prioridades pedagógicas de la institución"
              ],
              "respuesta": 2,
              "explicacion": "El rol del consejo directivo como órgano de gobierno escolar incluye ejercer control sobre las decisiones de administración de recursos; objetar o ajustar una propuesta que no responde a prioridades pedagógicas es su función, no aprobar por evitar conflicto (opción A) ni delegar la decisión de vuelta al rector sin pronunciarse (opción B)."
            }
          ]
        },
        {
          "id": "ped8",
          "texto": "Una docente de ciencias naturales diseña una evaluación final que incluye únicamente preguntas de memorización literal de definiciones, aunque durante el periodo trabajó con sus estudiantes proyectos de indagación científica y resolución de problemas. Varios estudiantes que participaron activamente en los proyectos obtienen notas bajas en el examen.",
          "preguntas": [
            {
              "enunciado": "El problema pedagógico principal de esta situación es que:",
              "opciones": [
                "La evaluación final no es coherente con las competencias que efectivamente se desarrollaron durante el proceso de enseñanza",
                "Los estudiantes no estudiaron lo suficiente para el examen final",
                "Las preguntas de memorización nunca deberían usarse en ninguna evaluación"
              ],
              "respuesta": 0,
              "explicacion": "El problema central es la falta de coherencia (alineación) entre lo enseñado —indagación y resolución de problemas— y lo evaluado —memorización literal—, lo que distorsiona la medición real del aprendizaje; no se trata de falta de estudio de los estudiantes (opción B, que no está sustentada) ni de que la memorización sea inválida en cualquier contexto (opción C, una generalización excesiva)."
            },
            {
              "enunciado": "¿Qué principio de la evaluación del aprendizaje se ve comprometido en este caso?",
              "opciones": [
                "La coherencia entre los objetivos de aprendizaje trabajados, la metodología usada y los instrumentos de evaluación aplicados",
                "El derecho de los docentes a evaluar exclusivamente los temas que prefieran, sin relación con lo enseñado",
                "La obligación de aplicar siempre el mismo tipo de examen en todas las asignaturas del colegio"
              ],
              "respuesta": 0,
              "explicacion": "El principio comprometido es la coherencia (alineación) entre lo enseñado y lo evaluado, un criterio técnico central de la evaluación formativa; no existe tal 'derecho' a evaluar sin relación con lo enseñado (opción B, contrario al debido proceso evaluativo), ni una obligación normativa de uniformar el tipo de examen entre asignaturas (opción C)."
            },
            {
              "enunciado": "¿Qué ajuste sería más coherente para que la evaluación final refleje mejor el proceso realizado durante el periodo?",
              "opciones": [
                "Mantener exactamente el mismo examen, pero explicárselo con más detalle a los estudiantes antes de aplicarlo",
                "Incluir en la evaluación situaciones de indagación y resolución de problemas, coherentes con la metodología trabajada durante el periodo",
                "Eliminar cualquier tipo de evaluación final y basar la nota únicamente en la asistencia a clase"
              ],
              "respuesta": 1,
              "explicacion": "El ajuste coherente alinea el instrumento de evaluación con la metodología efectivamente trabajada (indagación y resolución de problemas), no simplemente explica mejor un examen que sigue desalineado (opción A) ni elimina la evaluación de aprendizajes en favor de un criterio ajeno como la asistencia (opción C)."
            }
          ]
        },
        {
          "id": "ped9",
          "texto": "Durante una reunión de padres de familia, uno de ellos exige que se traslade a otro salón a un estudiante con discapacidad intelectual, argumentando que 'atrasa' a los demás estudiantes del curso. El rector debe responder públicamente ante todos los padres presentes.",
          "preguntas": [
            {
              "enunciado": "La solicitud del padre de familia es normativamente insostenible porque:",
              "opciones": [
                "Contradice el derecho a la educación inclusiva del estudiante con discapacidad, que no puede ser segregado del aula regular por esa condición, salvo que un proceso técnico y con participación familiar determine lo contrario",
                "Los padres de familia no tienen ningún derecho a expresar inquietudes sobre la dinámica del aula de sus hijos",
                "Trasladar a un estudiante de salón está prohibido en cualquier circunstancia dentro del sistema educativo colombiano"
              ],
              "respuesta": 0,
              "explicacion": "El marco de educación inclusiva protege el derecho del estudiante a permanecer en el aula regular, y cualquier decisión distinta debe surgir de un proceso técnico y no de la exigencia de otro padre de familia; sí existe el derecho de los padres a expresar inquietudes (opción B es falsa), y no es cierto que trasladar de salón esté prohibido en cualquier circunstancia (opción C, una generalización incorrecta que no aplica a este caso específico)."
            },
            {
              "enunciado": "¿Cuál sería la respuesta más adecuada del rector en ese momento, ante todos los padres presentes?",
              "opciones": [
                "Acceder de inmediato a la solicitud para evitar un conflicto con el padre de familia en la reunión",
                "Explicar con firmeza y respeto el marco de educación inclusiva vigente, y ofrecer un espacio posterior para atender las inquietudes específicas sin exponer al estudiante ni a su familia",
                "Ignorar la pregunta y cambiar de tema sin dar ninguna respuesta"
              ],
              "respuesta": 1,
              "explicacion": "La respuesta adecuada combina firmeza normativa con respeto, evitando ceder a una exigencia que vulneraría un derecho (opción A) y sin evadir la situación sin ninguna respuesta (opción C), a la vez que protege la privacidad del estudiante trasladando el detalle a un espacio posterior adecuado."
            },
            {
              "enunciado": "¿Qué acción de fondo debería impulsar el rector después de esta reunión para prevenir situaciones similares?",
              "opciones": [
                "Reforzar la sensibilización de la comunidad educativa sobre inclusión y los apoyos que recibe el estudiante, sin necesidad de exponer su información personal",
                "Publicar el diagnóstico médico del estudiante para que los demás padres entiendan la situación",
                "Sugerir discretamente a la familia del estudiante con discapacidad que lo cambie de colegio"
              ],
              "respuesta": 0,
              "explicacion": "La acción de fondo coherente con la protección de derechos es la sensibilización institucional, sin vulnerar la confidencialidad del estudiante (lo que descarta la opción B) ni sugerir su salida de la institución, que sería una forma de discriminación (opción C)."
            }
          ]
        },
        {
          "id": "ped10",
          "texto": "Un docente de bachillerato utiliza capturas de pantalla de conversaciones privadas de WhatsApp entre dos estudiantes, que un tercer estudiante le compartió, para sancionar disciplinariamente a los involucrados por comentarios ofensivos hacia un compañero, sin verificar el contexto completo de la conversación ni escuchar la versión de los estudiantes sancionados.",
          "preguntas": [
            {
              "enunciado": "El principal problema procedimental de esta actuación es que:",
              "opciones": [
                "Se sancionó sin garantizar el debido proceso: sin escuchar la versión de los estudiantes involucrados ni verificar el contexto completo de la evidencia",
                "Los docentes nunca pueden usar ningún tipo de evidencia digital en procesos disciplinarios",
                "El estudiante que compartió las capturas de pantalla cometió un delito por hacerlo"
              ],
              "respuesta": 0,
              "explicacion": "El problema central es la vulneración del debido proceso: sancionar sin escuchar a los involucrados ni verificar el contexto completo; la opción B es una generalización incorrecta (la evidencia digital puede usarse, pero con garantías procesales), y la opción C es una afirmación fuera del alcance del caso planteado."
            },
            {
              "enunciado": "¿Qué pasos mínimos exige el debido proceso disciplinario antes de imponer una sanción en un caso como este?",
              "opciones": [
                "Ninguno; el docente puede sancionar directamente si considera que la evidencia es suficientemente clara",
                "Escuchar a los estudiantes involucrados, verificar el contexto de los hechos y seguir el conducto establecido en el manual de convivencia antes de decidir una sanción",
                "Consultar únicamente al estudiante que compartió la evidencia, sin necesidad de hablar con los sancionados"
              ],
              "respuesta": 1,
              "explicacion": "El debido proceso exige escuchar a todas las partes involucradas, verificar los hechos en su contexto y seguir el procedimiento del manual de convivencia; sancionar sin ningún paso previo (opción A) o basarse solo en la versión de una parte (opción C) vulnera las garantías procesales básicas."
            },
            {
              "enunciado": "Independientemente del contenido de la conversación, ¿qué otro aspecto ético y normativo debería considerar el docente antes de usar capturas de una conversación privada como evidencia?",
              "opciones": [
                "Ninguno adicional; si el contenido es ofensivo, cualquier medio para obtenerlo es igualmente válido",
                "Las implicaciones de privacidad y el origen de esa información, y actuar conforme a los protocolos institucionales para el manejo de este tipo de evidencia",
                "Publicar las capturas ante todo el curso para que sirvan de ejemplo disciplinario"
              ],
              "respuesta": 1,
              "explicacion": "Además del debido proceso, el manejo de evidencia obtenida de conversaciones privadas plantea consideraciones de privacidad que deben resolverse conforme a protocolos institucionales, no asumiendo que cualquier medio de obtención es válido (opción A) ni exponiendo públicamente la evidencia ante el curso (opción C), lo cual sería además revictimizante."
            }
          ]
        }
      ]
    },
    {
      "id": "psico",
      "nombre": "Prueba psicotécnica aplicada a la educación",
      "descripcion": "10 situaciones laborales con 3 preguntas cada una, sobre las competencias comportamentales docentes (Guía 31 / Res. 3842): liderazgo, relaciones interpersonales y comunicación, trabajo en equipo, negociación y mediación, compromiso social e institucional, iniciativa y orientación al logro. En estas preguntas, varias opciones pueden parecer razonables: elige la que mejor refleje la competencia evaluada.",
      "casos": [
        {
          "id": "ps1",
          "texto": "Durante una reunión de área, dos colegas defienden posturas opuestas sobre cómo distribuir las horas de refuerzo académico, y la discusión empieza a subir de tono frente al resto del equipo.",
          "preguntas": [
            {
              "enunciado": "[Negociación y mediación] ¿Cuál sería la actuación más adecuada de un tercer docente presente en la reunión?",
              "opciones": [
                "Tomar partido abiertamente por la postura que le parece más razonable, para ayudar a zanjar la discusión",
                "Proponer una pausa breve y luego facilitar que ambas partes expongan sus argumentos e intereses de fondo, buscando puntos en común antes de una decisión",
                "Guardar silencio total y esperar a que la jefatura de área resuelva el conflicto sin intervenir en ningún momento"
              ],
              "respuesta": 1,
              "explicacion": "La competencia de negociación y mediación valora identificar intereses de fondo y facilitar un acuerdo entre las partes, no tomar partido (que polariza aún más la discusión) ni la pasividad total, que no aporta a resolver el conflicto."
            },
            {
              "enunciado": "[Relaciones interpersonales y comunicación] Si te correspondiera moderar esa conversación, ¿qué actitud sería más consistente con una comunicación asertiva?",
              "opciones": [
                "Interrumpir a quien hable más fuerte y pedirle que se calle inmediatamente",
                "Reconocer la validez emocional de ambas posturas y expresar con claridad y respeto un resumen de lo escuchado antes de continuar",
                "Cambiar de tema para evitar que la discusión continúe, sin resolver el desacuerdo de fondo"
              ],
              "respuesta": 1,
              "explicacion": "La comunicación asertiva combina validar lo que la otra persona siente con claridad y respeto en la expresión propia; interrumpir de forma brusca (opción A) o evadir el tema sin resolverlo (opción C) no son formas asertivas de manejar la situación."
            },
            {
              "enunciado": "[Orientación al logro] Una vez calmada la discusión, ¿qué acción reflejaría mejor una orientación al logro compartido del equipo?",
              "opciones": [
                "Proponer definir juntos un criterio objetivo (por ejemplo, resultados de diagnóstico) para distribuir las horas, en lugar de basarse solo en preferencias personales",
                "Dejar la decisión pendiente indefinidamente para no volver a generar tensión",
                "Aceptar la propuesta del colega con mayor antigüedad, sin analizar más criterios"
              ],
              "respuesta": 0,
              "explicacion": "La orientación al logro implica buscar el mejor resultado posible para el objetivo común (el aprendizaje de los estudiantes) usando criterios objetivos, no evitar la decisión indefinidamente (opción B) ni resolverla por jerarquía informal sin análisis (opción C)."
            }
          ]
        },
        {
          "id": "ps2",
          "texto": "Un docente recién llegado a una institución nota que el equipo de su área trabaja de forma bastante individual, con poca planeación conjunta, aunque los resultados generales del área no son malos.",
          "preguntas": [
            {
              "enunciado": "[Trabajo en equipo] ¿Cuál sería la actitud más constructiva del nuevo docente en sus primeras semanas?",
              "opciones": [
                "Proponer de inmediato una reestructuración completa de la forma de trabajo del área, sin conocer aún las razones de la dinámica actual",
                "Sumarse a la dinámica de trabajo individual sin cuestionarla, dado que los resultados generales no son malos",
                "Observar el funcionamiento actual, identificar oportunidades concretas de colaboración y proponerlas gradualmente, mostrando apertura a las razones detrás de la dinámica existente"
              ],
              "respuesta": 2,
              "explicacion": "El trabajo en equipo efectivo, especialmente al integrarse a un grupo nuevo, requiere primero comprender el contexto y luego proponer mejoras graduales, ni imponer cambios abruptos sin contexto (opción A) ni resignarse pasivamente a una dinámica subóptima (opción B)."
            },
            {
              "enunciado": "[Iniciativa] Si el docente identifica una oportunidad real de mejora (por ejemplo, compartir materiales entre docentes del área), ¿qué actuación reflejaría mejor la competencia de iniciativa?",
              "opciones": [
                "Esperar a que alguien más lo proponga primero, para no parecer que quiere sobresalir",
                "Proponer la idea de forma concreta al equipo, ofreciéndose a coordinar un primer ensayo piloto",
                "Implementar el cambio unilateralmente en su propia práctica, sin comunicarlo ni proponerlo al resto del equipo"
              ],
              "respuesta": 1,
              "explicacion": "La iniciativa se manifiesta al proponer proactivamente una mejora concreta y ofrecerse a impulsarla, no al esperar pasivamente que otro actúe (opción A) ni al aplicar el cambio de forma aislada sin compartirlo con el equipo, lo que no genera ningún beneficio colectivo (opción C)."
            },
            {
              "enunciado": "[Compromiso social e institucional] ¿Qué actitud reflejaría mejor el compromiso institucional del docente en este contexto?",
              "opciones": [
                "Enfocarse únicamente en el desempeño de su propio grupo de estudiantes, sin interesarse por la dinámica general del área",
                "Interesarse por comprender cómo su aporte individual puede contribuir a fortalecer los procesos y resultados de toda el área, más allá de su aula",
                "Criticar abiertamente el funcionamiento del área con otros docentes de otras áreas, fuera de los espacios institucionales formales"
              ],
              "respuesta": 1,
              "explicacion": "El compromiso institucional implica una mirada que trasciende el aula propia hacia el fortalecimiento colectivo, a diferencia de un enfoque exclusivamente individual (opción A) o de una crítica informal fuera de los canales institucionales adecuados (opción C)."
            }
          ]
        },
        {
          "id": "ps3",
          "texto": "Un coordinador académico debe comunicar a su equipo docente que, por decisión de la secretaría de educación, se reducirá el número de horas disponibles para proyectos transversales el próximo semestre, una noticia que sabe que generará descontento.",
          "preguntas": [
            {
              "enunciado": "[Liderazgo] ¿Cuál es la forma más adecuada de comunicar esta decisión al equipo?",
              "opciones": [
                "Enviar la información por un mensaje escrito breve, sin espacio para preguntas ni explicación del contexto",
                "Convocar una reunión, explicar el contexto de la decisión con transparencia, reconocer el impacto que tendrá y abrir un espacio para escuchar al equipo",
                "Postergar indefinidamente la comunicación de la noticia para evitar el descontento inmediato"
              ],
              "respuesta": 1,
              "explicacion": "El liderazgo efectivo en momentos difíciles combina transparencia, reconocimiento del impacto y apertura al diálogo, a diferencia de una comunicación fría y unidireccional (opción A) o de postergar la información, lo que suele generar más desconfianza (opción C)."
            },
            {
              "enunciado": "[Compromiso social e institucional] Ante el descontento esperado del equipo, ¿qué actitud del coordinador reflejaría mejor un compromiso institucional genuino?",
              "opciones": [
                "Sumarse abiertamente a las críticas contra la secretaría de educación frente al equipo docente, para congraciarse con ellos",
                "Reconocer las dificultades que genera la decisión, mientras busca junto al equipo alternativas viables dentro del nuevo marco de recursos disponible",
                "Minimizar la importancia de la reducción de horas para evitar que el equipo se preocupe"
              ],
              "respuesta": 1,
              "explicacion": "El compromiso institucional genuino equilibra la validación de las dificultades reales con una postura constructiva orientada a encontrar soluciones dentro del nuevo contexto, sin sumarse a una crítica que erosiona la relación institucional (opción A) ni minimizar un problema real (opción C)."
            },
            {
              "enunciado": "[Negociación y mediación] Si algunos docentes proponen alternativas para mantener parte de los proyectos transversales con otros recursos, ¿cómo debería actuar el coordinador?",
              "opciones": [
                "Descartar las propuestas de inmediato porque la decisión de reducir horas ya fue tomada y es inapelable",
                "Escuchar las propuestas, evaluar su viabilidad dentro del nuevo marco de recursos y gestionar ante la secretaría de educación las que resulten razonables",
                "Aceptar todas las propuestas sin evaluarlas, solo para mantener contento al equipo"
              ],
              "respuesta": 1,
              "explicacion": "Una mediación efectiva combina apertura a escuchar alternativas con un análisis realista de su viabilidad y, si corresponde, su gestión ante la instancia superior; descartar sin escuchar (opción A) o aceptar todo sin evaluar (opción C) no reflejan un manejo equilibrado del conflicto."
            }
          ]
        },
        {
          "id": "ps4",
          "texto": "Una docente percibe que uno de sus estudiantes ha estado más distraído y retraído de lo habitual en las últimas dos semanas, aunque su desempeño académico sigue siendo aceptable.",
          "preguntas": [
            {
              "enunciado": "[Sensibilidad interpersonal] ¿Qué actuación refleja mejor esta competencia en la docente?",
              "opciones": [
                "No intervenir, ya que el desempeño académico del estudiante sigue siendo aceptable",
                "Acercarse al estudiante con un gesto genuino de interés y escucha, sin presionarlo a hablar si no lo desea, prestando atención a señales adicionales",
                "Preguntarle directamente y en público, frente al resto del curso, qué le está pasando"
              ],
              "respuesta": 1,
              "explicacion": "La sensibilidad interpersonal se manifiesta en la capacidad de percibir señales sutiles y acercarse con respeto y sin presión, a diferencia de la indiferencia (opción A, que ignora una señal de posible malestar) o de una intervención pública que puede incomodar al estudiante (opción C)."
            },
            {
              "enunciado": "[Relaciones interpersonales y comunicación] Si el estudiante decide compartir algo de lo que le ocurre, ¿qué respuesta de la docente sería más adecuada?",
              "opciones": [
                "Escuchar con atención genuina, validar lo que siente sin minimizarlo, y ofrecer orientarlo hacia el apoyo adecuado si es necesario",
                "Compartir de inmediato con otros docentes lo que el estudiante le contó, para que todos estén al tanto",
                "Restarle importancia a lo que cuenta el estudiante, asumiendo que probablemente exagera"
              ],
              "respuesta": 0,
              "explicacion": "Una comunicación efectiva prioriza la escucha validante y la orientación hacia apoyo pertinente, respetando la confianza del estudiante, a diferencia de divulgar la información sin necesidad (opción B) o de minimizar su experiencia (opción C)."
            },
            {
              "enunciado": "[Iniciativa] Si después de la conversación la docente sigue percibiendo señales de alerta, ¿qué actuación proactiva sería más adecuada?",
              "opciones": [
                "Esperar a que la situación empeore claramente antes de tomar cualquier acción adicional",
                "Consultar con el estudiante si está de acuerdo, y remitir proactivamente el caso a orientación escolar para un acompañamiento más especializado",
                "Asumir personalmente el rol de orientadora del estudiante, sin remitirlo a ningún profesional"
              ],
              "respuesta": 1,
              "explicacion": "La iniciativa adecuada en este contexto es actuar proactivamente remitiendo el caso a quien tiene la competencia especializada (orientación escolar), sin esperar a que la situación empeore (opción A) ni asumir un rol que excede las competencias del docente (opción C)."
            }
          ]
        },
        {
          "id": "ps5",
          "texto": "En una institución, se le asigna a un docente la responsabilidad de liderar la implementación de un nuevo proyecto de lectura institucional, sin experiencia previa liderando proyectos de este tipo.",
          "preguntas": [
            {
              "enunciado": "[Liderazgo] ¿Cuál sería la actitud más adecuada del docente frente a este nuevo reto?",
              "opciones": [
                "Rechazar la responsabilidad de inmediato, argumentando falta total de experiencia previa",
                "Aceptar el reto, apoyándose en la experiencia de colegas y en formación complementaria, mientras construye su propio estilo de liderazgo del proyecto",
                "Aceptar la responsabilidad, pero delegar por completo todas las decisiones en otros colegas sin asumir un rol activo"
              ],
              "respuesta": 1,
              "explicacion": "El liderazgo efectivo ante un reto nuevo combina apertura al aprendizaje y apoyo en otros con la asunción activa del rol, a diferencia de rechazar el reto sin más (opción A) o de delegar todo sin ejercer liderazgo real (opción C)."
            },
            {
              "enunciado": "[Orientación al logro] Para que el proyecto tenga un impacto real y no quede solo en el papel, ¿qué actuación sería más consistente con esta competencia?",
              "opciones": [
                "Definir metas concretas y medibles para el proyecto, y hacer seguimiento periódico a su cumplimiento",
                "Enfocarse únicamente en actividades vistosas para las fechas conmemorativas del colegio",
                "Dejar que el proyecto avance de manera espontánea, sin metas ni seguimiento definido"
              ],
              "respuesta": 0,
              "explicacion": "La orientación al logro exige metas claras y seguimiento sistemático, a diferencia de centrarse solo en actividades puntuales sin visión de impacto sostenido (opción B) o de dejar el proyecto sin ninguna estructura de seguimiento (opción C)."
            },
            {
              "enunciado": "[Trabajo en equipo] Si algunos colegas se muestran escépticos frente al nuevo proyecto, ¿cuál sería la mejor forma de involucrarlos?",
              "opciones": [
                "Ignorar a los escépticos y avanzar solo con quienes ya están de acuerdo desde el principio",
                "Imponer la participación obligatoria de todos, sin espacio para expresar sus dudas",
                "Escuchar sus dudas, involucrarlos en el diseño de algunas actividades y mostrar resultados tempranos que generen confianza en el proyecto"
              ],
              "respuesta": 2,
              "explicacion": "Involucrar genuinamente a un equipo escéptico requiere escuchar sus dudas y darles un rol activo en el diseño, generando confianza con resultados visibles, a diferencia de excluirlos (opción A) o de imponer su participación sin considerar sus inquietudes (opción B)."
            }
          ]
        },
        {
          "id": "ps6",
          "texto": "Un docente comete un error al calcular las notas finales de un grupo, lo que afecta a varios estudiantes antes de que el boletín sea entregado a los acudientes.",
          "preguntas": [
            {
              "enunciado": "[Compromiso social e institucional] Al detectar el error a tiempo, ¿cuál es la actuación más adecuada?",
              "opciones": [
                "Corregir el error en silencio, sin informar a la coordinación académica sobre lo ocurrido",
                "Informar de inmediato a la coordinación académica, corregir el error por los canales formales y verificar que no queden inconsistencias adicionales",
                "Esperar a que algún estudiante o acudiente reclame antes de corregir cualquier cosa"
              ],
              "respuesta": 1,
              "explicacion": "El compromiso institucional exige transparencia y corrección oportuna por los canales formales apenas se detecta el error, no ocultarlo (opción A) ni esperar a que un tercero lo detecte primero (opción C)."
            },
            {
              "enunciado": "[Relaciones interpersonales y comunicación] Si un estudiante afectado por el error se muestra molesto al enterarse, ¿cuál sería la respuesta más adecuada del docente?",
              "opciones": [
                "Reconocer el error con honestidad, disculparse profesionalmente y explicar con claridad cómo y cuándo se corregirá",
                "Justificar el error atribuyéndolo a la carga de trabajo excesiva, sin ofrecer una disculpa directa",
                "Evitar la conversación con el estudiante hasta que se calme por sí solo"
              ],
              "respuesta": 0,
              "explicacion": "Reconocer el error con honestidad y explicar la corrección refleja una comunicación asertiva y responsable, a diferencia de justificarse sin asumir responsabilidad (opción B) o de evitar la conversación necesaria (opción C)."
            },
            {
              "enunciado": "[Iniciativa] Para evitar que un error similar vuelva a ocurrir, ¿qué actuación reflejaría mejor la competencia de iniciativa?",
              "opciones": [
                "No hacer ningún cambio, confiando en que fue un hecho aislado que no se repetirá",
                "Proponer y adoptar una revisión cruzada de calificaciones con otro colega antes de reportarlas oficialmente",
                "Culpar al sistema de calificaciones institucional como única causa del error, sin proponer ningún cambio en su propio proceso"
              ],
              "respuesta": 1,
              "explicacion": "La iniciativa se refleja en proponer una mejora concreta al propio proceso de trabajo (una revisión cruzada), a diferencia de no actuar (opción A) o de atribuir toda la responsabilidad a un factor externo sin proponer ningún ajuste propio (opción C)."
            }
          ]
        },
        {
          "id": "ps7",
          "texto": "A un docente se le asigna, además de su carga habitual, el acompañamiento de un estudiante nuevo que llegó a mitad de año con dificultades de adaptación social al grupo.",
          "preguntas": [
            {
              "enunciado": "[Iniciativa] ¿Qué actuación refleja mejor la iniciativa del docente frente a esta nueva responsabilidad?",
              "opciones": [
                "Esperar instrucciones detalladas y específicas de coordinación antes de tomar cualquier acción con el estudiante",
                "Diseñar, por su cuenta, algunas estrategias concretas para facilitar la integración social del estudiante y proponerlas a coordinación para su validación",
                "Delegar por completo el acompañamiento del estudiante en sus compañeros de curso, sin intervención directa del docente"
              ],
              "respuesta": 1,
              "explicacion": "La iniciativa se refleja en proponer proactivamente estrategias concretas, sometiéndolas luego a validación institucional, a diferencia de esperar pasivamente instrucciones detalladas (opción A) o de delegar toda la responsabilidad en los estudiantes (opción C)."
            },
            {
              "enunciado": "[Sensibilidad interpersonal] Al observar que el estudiante nuevo se aísla durante los descansos, ¿cuál sería la actuación más adecuada?",
              "opciones": [
                "Obligarlo a integrarse a un grupo específico de compañeros, sin considerar sus preferencias",
                "Acompañar el proceso con paciencia, generando oportunidades de interacción de bajo riesgo social, respetando su ritmo de adaptación",
                "No intervenir, asumiendo que la adaptación social es un asunto exclusivamente personal del estudiante"
              ],
              "respuesta": 1,
              "explicacion": "La sensibilidad interpersonal implica generar oportunidades de interacción de forma respetuosa y gradual, sin forzar la integración (opción A) ni desentenderse del proceso (opción C)."
            },
            {
              "enunciado": "[Trabajo en equipo] Para que el acompañamiento sea más efectivo, ¿qué actuación sería más coherente con esta competencia?",
              "opciones": [
                "Manejar el caso únicamente de forma individual, sin compartir información con otros docentes del estudiante",
                "Coordinar con los demás docentes del estudiante y con orientación escolar una estrategia conjunta y consistente de acompañamiento",
                "Delegar todo el seguimiento en el director de grupo anterior del estudiante, en su antiguo colegio"
              ],
              "respuesta": 1,
              "explicacion": "El trabajo en equipo efectivo implica coordinar con otros actores relevantes (docentes, orientación escolar) para una estrategia conjunta, a diferencia de manejarlo de forma aislada (opción A) o de delegar la responsabilidad en alguien ajeno a la institución actual (opción C)."
            }
          ]
        },
        {
          "id": "ps8",
          "texto": "Un docente considera que el formato de planeación de clase exigido por la institución es demasiado extenso y le resta tiempo de preparación pedagógica real. Otros colegas comparten esta percepción, aunque nadie lo ha planteado formalmente.",
          "preguntas": [
            {
              "enunciado": "[Iniciativa] ¿Cuál sería la actuación más constructiva del docente frente a esta situación?",
              "opciones": [
                "Dejar de diligenciar el formato completo por su cuenta, sin informar a nadie sobre su decisión",
                "Recoger las percepciones de sus colegas y presentar una propuesta concreta de simplificación del formato ante la instancia correspondiente",
                "Quejarse frecuentemente del formato en los pasillos, sin proponer ninguna alternativa concreta"
              ],
              "respuesta": 1,
              "explicacion": "La iniciativa constructiva canaliza una inquietud compartida hacia una propuesta concreta presentada formalmente, a diferencia de incumplir unilateralmente una exigencia institucional (opción A) o de quejarse sin proponer alternativas (opción C)."
            },
            {
              "enunciado": "[Negociación y mediación] Al presentar la propuesta a coordinación, ¿qué enfoque sería más efectivo?",
              "opciones": [
                "Exigir la eliminación total del formato de planeación, sin ofrecer ninguna alternativa",
                "Explicar el problema con datos concretos (tiempo invertido, percepción del equipo) y proponer una versión ajustada que mantenga lo esencial del formato",
                "Aceptar en silencio que el formato seguirá igual, sin plantear la inquietud a nadie"
              ],
              "respuesta": 1,
              "explicacion": "Una negociación efectiva se apoya en argumentos concretos y en una propuesta alternativa viable que mantenga el propósito original del formato, a diferencia de exigir sin ofrecer alternativas (opción A) o de no plantear la inquietud en absoluto (opción C)."
            },
            {
              "enunciado": "[Compromiso social e institucional] Si la propuesta de simplificación no es aprobada en su totalidad, ¿cuál sería la actitud más coherente con el compromiso institucional?",
              "opciones": [
                "Dejar de utilizar el formato de todas formas, ya que su propuesta no fue aceptada como se esperaba",
                "Aceptar la decisión institucional, continuar diligenciando el formato vigente y buscar otros momentos u oportunidades para retomar la propuesta",
                "Desacreditar públicamente a quienes tomaron la decisión de no aprobar la propuesta"
              ],
              "respuesta": 1,
              "explicacion": "El compromiso institucional implica aceptar las decisiones tomadas por las instancias correspondientes, sin dejar de cumplir sus responsabilidades (opción A) ni desacreditar públicamente a quien decide (opción C), mientras se mantiene abierta la posibilidad de insistir en el futuro."
            }
          ]
        },
        {
          "id": "ps9",
          "texto": "En una salida pedagógica, dos estudiantes de cursos distintos que participan en la actividad tienen un desacuerdo que empieza a escalar en tono, mientras los docentes acompañantes intentan mantener el orden del grupo completo.",
          "preguntas": [
            {
              "enunciado": "[Liderazgo] ¿Cuál sería la actuación más adecuada del docente que primero detecta la situación?",
              "opciones": [
                "Ignorar el desacuerdo mientras no se convierta en un problema mayor, priorizando el resto del grupo",
                "Intervenir con calma y firmeza, separando a los estudiantes si es necesario, y coordinar con el otro docente acompañante para manejar la situación sin descuidar al resto del grupo",
                "Detener por completo la actividad de todo el grupo hasta resolver el conflicto entre los dos estudiantes"
              ],
              "respuesta": 1,
              "explicacion": "El liderazgo situacional efectivo combina intervención oportuna y coordinada con la gestión simultánea del resto del grupo, a diferencia de ignorar la situación (opción A) o de detener innecesariamente toda la actividad para el grupo completo (opción C)."
            },
            {
              "enunciado": "[Negociación y mediación] Una vez separados los estudiantes, ¿cuál sería el siguiente paso más adecuado?",
              "opciones": [
                "Sancionar de inmediato a ambos estudiantes por igual, sin escuchar sus versiones",
                "Escuchar por separado a cada estudiante para entender el origen del desacuerdo, antes de facilitar un espacio de resolución conjunta si es pertinente",
                "Pedirles que se disculpen mutuamente de inmediato, sin indagar qué originó el conflicto"
              ],
              "respuesta": 1,
              "explicacion": "Una mediación adecuada requiere primero entender las versiones de cada parte por separado, antes de facilitar cualquier resolución conjunta, a diferencia de sancionar sin escuchar (opción A) o de imponer una disculpa sin comprender el origen del conflicto (opción C)."
            },
            {
              "enunciado": "[Trabajo en equipo] Al regresar de la salida pedagógica, ¿qué actuación reflejaría mejor la coordinación entre los docentes acompañantes?",
              "opciones": [
                "Cada docente reporta el incidente por separado a diferentes instancias, sin coordinar la información entre sí",
                "Los docentes acompañantes se reúnen brevemente para unificar su versión de los hechos y reportar el incidente de forma coordinada a coordinación o convivencia escolar",
                "Ninguno de los docentes reporta el incidente, considerando que ya se resolvió durante la salida"
              ],
              "respuesta": 1,
              "explicacion": "El trabajo en equipo efectivo entre docentes acompañantes implica coordinar una versión unificada de los hechos y reportarla formalmente, a diferencia de reportes descoordinados (opción A) o de omitir el reporte de un incidente relevante (opción C)."
            }
          ]
        },
        {
          "id": "ps10",
          "texto": "A fin de año, un docente recibe una evaluación de desempeño con un puntaje más bajo del que esperaba, específicamente en el componente de innovación pedagógica.",
          "preguntas": [
            {
              "enunciado": "[Compromiso social e institucional] ¿Cuál sería la reacción más constructiva del docente al recibir este resultado?",
              "opciones": [
                "Rechazar por completo el resultado sin analizarlo, asumiendo que el evaluador se equivocó",
                "Revisar con apertura los criterios evaluados, identificar oportunidades reales de mejora y, si lo considera pertinente, presentar sus observaciones por los canales formales",
                "Aceptar el resultado sin ningún cuestionamiento, aunque considere que hay elementos injustos en la evaluación"
              ],
              "respuesta": 1,
              "explicacion": "Una actitud constructiva combina apertura genuina a la retroalimentación con el uso adecuado de los canales formales para expresar desacuerdos justificados, a diferencia del rechazo total sin análisis (opción A) o de la aceptación pasiva sin ningún cuestionamiento razonado (opción C)."
            },
            {
              "enunciado": "[Orientación al logro] Para mejorar específicamente en el componente de innovación pedagógica el próximo año, ¿qué actuación sería más efectiva?",
              "opciones": [
                "Esperar a la próxima evaluación para ver si el puntaje mejora por sí solo, sin cambiar su práctica",
                "Definir acciones concretas de formación y experimentación pedagógica, con metas específicas y verificables durante el año",
                "Cambiar completamente de metodología de un día para otro, sin ninguna planeación ni acompañamiento"
              ],
              "respuesta": 1,
              "explicacion": "La orientación al logro efectiva se apoya en metas concretas y verificables con un plan de acción, a diferencia de esperar pasivamente un cambio espontáneo (opción A) o de improvisar un cambio drástico sin planeación (opción C)."
            },
            {
              "enunciado": "[Iniciativa] ¿Qué actuación proactiva podría ayudar al docente a desarrollar mejor esta competencia de cara al futuro?",
              "opciones": [
                "Buscar por su cuenta espacios de formación, redes de intercambio pedagógico o mentoría con colegas más experimentados en innovación",
                "Esperar a que la institución le asigne obligatoriamente una capacitación específica sobre el tema",
                "Evitar cualquier proyecto de innovación en el futuro, para no arriesgarse a otra evaluación baja"
              ],
              "respuesta": 0,
              "explicacion": "La iniciativa se refleja en buscar proactivamente oportunidades de desarrollo profesional, sin esperar a que la institución las asigne obligatoriamente (opción B) y sin adoptar una actitud evitativa que impide cualquier mejora futura (opción C)."
            }
          ]
        }
      ]
    }
  ]
};
