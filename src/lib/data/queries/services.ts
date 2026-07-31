import type { Service } from "@/types";
import { servicesData } from "@/lib/data/services";

export async function getServices(): Promise<Service[]> {
  return servicesData;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  return servicesData.find((service) => service.slug === slug);
}
