import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://pvsvuomsqglnxntatwfm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2c3Z1b21zcWdsbnhudGF0d2ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1OTE2MzMsImV4cCI6MjAzMzE2NzYzM30.zrHzWS_R5bJ824Ao3U_nVvW7AAJD3QP7m9BruUPH4Oc";


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        detectSessionInUrl: true,
    },
    db: {
        schema: 'public',
    },
});