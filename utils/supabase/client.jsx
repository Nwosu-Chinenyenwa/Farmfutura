import { createBrowserClient } from "@supabase/ssr";
import { createClient as createNewClient } from "@supabase/supabase-js";

export const createClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase URL or Anon Key in environment variables");
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
};

export const createAdminClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_SRK;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Missing Supabase URL or Service Role Key in environment variables");
  }

  return createNewClient(supabaseUrl, supabaseServiceKey);
};
