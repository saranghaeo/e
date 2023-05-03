import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pidnrnvitkiyqsmequnz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZG5ybnZpdGtpeXFzbWVxdW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwMTQxNDksImV4cCI6MTk5ODU5MDE0OX0.zRLyXkGzAXFAjS-Pi0Nj8AX5BWKsBjbXxgwm0hEvQps'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)