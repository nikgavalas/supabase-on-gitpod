FROM gitpod/workspace-full:2023-04-26-16-17-17

RUN brew install supabase/tap/supabase

# Installs all the supabase docker containers so we don't need to do this on
# every workspace start.
RUN npx supabase start
RUN npx supabase stop
