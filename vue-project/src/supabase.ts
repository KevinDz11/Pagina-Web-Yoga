import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pxfdixjyguiuowvbvxbh.supabase.co";
const supabaseAnonKey = "sb_publishable_wVFMeRq_z5A9mJRI_w2hZg_r1DeXm1y";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
