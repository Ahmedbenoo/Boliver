import type { HeroContent } from "@/types";
import type { Tables } from "@/types/supabase";
import { heroData } from "@/lib/data/hero";
import { createClient } from "@/lib/supabase/server";

export async function getHeroContent(): Promise<HeroContent> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return heroData;
    }

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("hero_section")
      .select("content")
      .eq("is_published", true)
      .single();

    if (error || !data) {
      return heroData;
    }

    return (data as Pick<Tables<"hero_section">, "content">).content as unknown as HeroContent;
  } catch {
    return heroData;
  }
}
