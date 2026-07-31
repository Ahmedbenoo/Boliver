import type { HeroContent } from "@/types";
import { heroData } from "@/lib/data/hero";

export async function getHeroContent(): Promise<HeroContent> {
  return heroData;
}
