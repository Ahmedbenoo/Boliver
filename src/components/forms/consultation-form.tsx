"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  consultationFormSchema,
  type ConsultationFormData,
} from "@/lib/validations/forms";
import { servicesData } from "@/lib/data/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ConsultationForm() {
  const t = useTranslations("forms");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<
    Partial<Record<keyof ConsultationFormData, string>>
  >({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      phone: (formData.get("phone") as string) || undefined,
      budget: formData.get("budget") as ConsultationFormData["budget"],
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    const result = consultationFormSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ConsultationFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ConsultationFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/10 p-8 text-center">
        <p className="text-lg font-medium text-accent">Consultation request received!</p>
        <p className="mt-2 text-sm text-muted">
          Our team will reach out within one business day to schedule your call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required aria-invalid={!!errors.name} />
          {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required aria-invalid={!!errors.email} />
          {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company *</Label>
          <Input id="company" name="company" required aria-invalid={!!errors.company} />
          {errors.company && <p className="text-xs text-red-400">{errors.company}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">{t("budget")} *</Label>
          <Select id="budget" name="budget" required defaultValue="" aria-invalid={!!errors.budget}>
            <option value="" disabled>
              {t("selectBudget")}
            </option>
            <option value="under-50k">{t("budgetUnder50k")}</option>
            <option value="50k-150k">{t("budget50k150k")}</option>
            <option value="150k-400k">{t("budget150k400k")}</option>
            <option value="400k-plus">{t("budget400kPlus")}</option>
            <option value="not-sure">{t("budgetNotSure")}</option>
          </Select>
          {errors.budget && <p className="text-xs text-red-400">{errors.budget}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service *</Label>
          <Select id="service" name="service" required defaultValue="" aria-invalid={!!errors.service}>
            <option value="" disabled>
              Select a service
            </option>
            {servicesData.map((service) => (
              <option key={service.id} value={service.slug}>
                {service.title}
              </option>
            ))}
          </Select>
          {errors.service && <p className="text-xs text-red-400">{errors.service}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Tell us about your project *</Label>
        <Textarea id="message" name="message" required aria-invalid={!!errors.message} />
        {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Submitting..." : "Book Consultation"}
      </Button>
    </form>
  );
}
