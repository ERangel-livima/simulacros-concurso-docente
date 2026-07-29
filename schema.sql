-- ============================================================
-- Esquema para la plataforma de simulacros — Concurso Docente 2026
-- Ejecuta este script completo en Supabase: Panel > SQL Editor > New query > Run
-- ============================================================

-- 1) Tabla de perfiles (extiende auth.users, que administra Supabase Auth)
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  email text,
  is_admin boolean not null default false,
  status text not null default 'pendiente',   -- 'pendiente' | 'aprobado' | 'rechazado'
  created_at timestamptz not null default now()
);

alter table public.profiles add column if not exists status text not null default 'pendiente';

alter table public.profiles enable row level security;

-- Cada usuario puede ver y actualizar su propio perfil
drop policy if exists "usuarios ven su propio perfil" on public.profiles;
create policy "usuarios ven su propio perfil"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "usuarios actualizan su propio perfil" on public.profiles;
create policy "usuarios actualizan su propio perfil"
  on public.profiles for update
  using (auth.uid() = id);

-- Función auxiliar para comprobar si el usuario actual es administrador,
-- sin causar recursión infinita en las políticas de seguridad (RLS)
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false);
$$;

-- Los administradores pueden ver todos los perfiles
drop policy if exists "admins ven todos los perfiles" on public.profiles;
create policy "admins ven todos los perfiles"
  on public.profiles for select
  using (public.is_admin());

-- Los administradores pueden actualizar cualquier perfil (para aprobar/rechazar registros)
drop policy if exists "admins actualizan cualquier perfil" on public.profiles;
create policy "admins actualizan cualquier perfil"
  on public.profiles for update
  using (public.is_admin());

-- Función auxiliar: ¿el usuario actual está aprobado (o es admin)?
create or replace function public.is_approved()
returns boolean
language sql
security definer
set search_path = public
as $$
  select coalesce((select (status = 'aprobado' or is_admin) from public.profiles where id = auth.uid()), false);
$$;

-- 2) Función y trigger: crear automáticamente un perfil cuando alguien se registra
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email), new.email);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 3) Tabla de intentos (resultados de cada simulacro resuelto)
create table if not exists public.attempts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  quiz_id text not null,          -- 'diagnostico' | 'lc' | 'rc' | 'ped' | 'psico'
  quiz_nombre text not null,
  score int not null,
  total int not null,
  pct numeric not null,
  category_breakdown jsonb not null default '{}'::jsonb,
  answers jsonb not null default '[]'::jsonb,
  duration_seconds int,
  created_at timestamptz not null default now()
);

alter table public.attempts enable row level security;

create index if not exists attempts_user_id_idx on public.attempts(user_id);
create index if not exists attempts_quiz_id_idx on public.attempts(quiz_id);

-- Un usuario puede insertar y ver únicamente sus propios intentos (solo si está aprobado)
drop policy if exists "usuarios insertan sus propios intentos" on public.attempts;
create policy "usuarios insertan sus propios intentos"
  on public.attempts for insert
  with check (auth.uid() = user_id and public.is_approved());

drop policy if exists "usuarios ven sus propios intentos" on public.attempts;
create policy "usuarios ven sus propios intentos"
  on public.attempts for select
  using (auth.uid() = user_id);

-- Los administradores pueden ver todos los intentos de todos los usuarios
drop policy if exists "admins ven todos los intentos" on public.attempts;
create policy "admins ven todos los intentos"
  on public.attempts for select
  using (public.is_admin());

-- ============================================================
-- PASO FINAL (hazlo tú, después de registrarte por primera vez en la plataforma):
-- Conviértete en administrador reemplazando tu correo abajo y ejecutando:
--
-- update public.profiles set is_admin = true
-- where id = (select id from auth.users where email = 'tu-correo@ejemplo.com');
-- ============================================================
