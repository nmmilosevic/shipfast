create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  idea text not null,
  budget text,
  timeline text,
  created_at timestamptz default now()
);

alter table public.leads enable row level security;

create policy "Service role only"
on public.leads
for all
using (auth.role() = 'service_role');
