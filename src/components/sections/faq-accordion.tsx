"use client";

import type { FaqItem } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqAccordionProps {
  data: FaqItem[];
}

export function FaqAccordion({ data }: FaqAccordionProps) {
  return (
    <Accordion type="single" className="mx-auto max-w-3xl">
      {data.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger value={item.id}>{item.question}</AccordionTrigger>
          <AccordionContent value={item.id}>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
