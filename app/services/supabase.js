import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://csuwwhwgguhouavyviwy.supabase.co";
//safe if row level security is activated
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdXd3aHdnZ3Vob3Vhdnl2aXd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0ODExNTgsImV4cCI6MjA0MjA1NzE1OH0.g99RfcUskdRT5Ha5_xymQhWF77wzPKIICntnecT-Jhc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
