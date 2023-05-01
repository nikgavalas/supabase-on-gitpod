#!/bin/bash

# Load environment variables from .env file
source .env

echo "Supabase API URL: $SUPABASE_API_URL"

status=$(curl -s -o /dev/null -w "%{http_code}" "${SUPABASE_API_URL}/rest/v1/")

while [ $status -ne 200 ]
do
  echo "Waiting for Supabase to start..."
  sleep 5
  status=$(curl -s -o /dev/null -w "%{http_code}" "${SUPABASE_API_URL}/rest/v1/")
done

echo "Supabase is ready!"
