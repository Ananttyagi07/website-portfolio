-- Run this in Supabase SQL editor
-- Enable extension (if not present)
create extension if not exists "pgcrypto";

-- Messages table (for contact form)
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  message text not null,
  created_at timestamptz default now()
);

-- Conversations table (chat logs)
create table if not exists conversations (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null,
  user_message text not null,
  bot_reply text not null,
  metadata jsonb,
  created_at timestamptz default now()
);

create index if not exists idx_conversations_session on conversations (session_id);
