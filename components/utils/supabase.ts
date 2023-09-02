// import { createClient } from '@supabase/supabase-js'

// // Create a single supabase client for interacting with database
// export const supabase = createClient(
// process.env.NEXT_PUBLIC_SUPABASE_URL!,
// process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

import { createClient } from '@supabase/supabase-js'

    const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    
    export const supabase = createClient(supabaseUrl, supabaseKey)
