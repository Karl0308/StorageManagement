import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uxdjpwsjqaeimhrkerqa.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4ZGpwd3NqcWFlaW1ocmtlcnFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3NjIxMTksImV4cCI6MjA1MDMzODExOX0.0AXl0C1Hom9FOl7pKz-BJJAjFOzXOKKHSce9Ut3auDQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})