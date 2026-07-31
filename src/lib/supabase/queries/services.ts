import type { Service } from "@/types";
import type { Tables } from "@/types/supabase";
import { servicesData } from "@/lib/data/services";
import { createClient } from "@/lib/supabase/server";

type ServiceRow = Tables<"services">;

export async function getServices(): Promise<Service[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return servicesData;
    }

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("is_published", true)
      .order("sort_order", { ascending: true });

    if (error || !data?.length) {
      return servicesData;
    }

    return (data as ServiceRow[]).map((row) => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      description: row.description,
      icon: row.icon,
      features: (row.features as string[]) ?? [],
      featured: row.featured,
      sortOrder: row.sort_order,
    }));
  } catch {
    return servicesData;
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const services = await getServices();
  return services.find((s) => s.slug === slug);
}
