import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const consultationFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
  budget: z.enum(["under-50k", "50k-150k", "150k-400k", "400k-plus", "not-sure"]),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Tell us about your project"),
});

export type ConsultationFormData = z.infer<typeof consultationFormSchema>;
