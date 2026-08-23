"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactSchema, type ContactFormValues } from "@/lib/validation/contactSchema";
import { Input, TextArea } from "@/components/ui/Input";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Input placeholder="Your name" {...register("name")} />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <Input type="email" placeholder="Work email" {...register("email")} />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <Input placeholder="Company (optional)" {...register("company")} />
      </div>

      <div>
        <TextArea placeholder="What are you looking to grow?" {...register("message")} />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-brand disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-medium text-brand">
          Thanks — we&apos;ll be in touch within one business day.
        </motion.p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600">Something went wrong. Please email us directly.</p>
      )}
    </form>
  );
}
