"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactDetails } from "@/content/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { contactSchema, type ContactFormValues } from "@/lib/validation/contactSchema";

export function EnquiryForm() {
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
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("success");
      track("enquiry_submit_success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message} registration={register("name")} autoComplete="name" />
        <Field
          label="Work email"
          type="email"
          error={errors.email?.message}
          registration={register("email")}
          autoComplete="email"
          inputMode="email"
        />
      </div>
      <Field
        label="Company / brand"
        error={errors.company?.message}
        registration={register("company")}
        autoComplete="organization"
      />
      <Field
        label="What do you need help with?"
        multiline
        error={errors.helpNeeded?.message}
        registration={register("helpNeeded")}
      />
      <Field label="Budget" optional error={errors.budget?.message} registration={register("budget")} />

      <p className="text-sm text-muted">
        We’ll only use these details to respond to your enquiry. See our{" "}
        <Link href="/privacy" className="text-fg underline underline-offset-4">
          privacy policy
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-button bg-accent px-6 py-3 text-[0.9375rem] font-semibold text-canvas transition-colors duration-200 hover:bg-accent-hover disabled:cursor-wait disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending…" : "Send enquiry"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p role="status" className="rounded-button border border-line bg-surface p-4 text-sm">
            <strong className="font-semibold">Thank you — your enquiry has been sent.</strong> We’ll be in touch to arrange
            a conversation.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="rounded-button border border-accent/60 bg-surface p-4 text-sm">
            <strong className="font-semibold">Your enquiry couldn’t be sent.</strong> Please try again, or email us at{" "}
            <a href={`mailto:${contactDetails.email}`} className="underline underline-offset-4">
              {contactDetails.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

interface FieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  label: string;
  error?: string;
  optional?: boolean;
  multiline?: boolean;
  registration: UseFormRegisterReturn;
}

const controlClass =
  "w-full rounded-button border bg-surface px-4 py-3 text-base text-fg placeholder:text-muted transition-colors duration-200 hover:border-fg/40 focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-0";

function Field({ label, error, optional, multiline, registration, ...inputProps }: FieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const shared = {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: cn(controlClass, error ? "border-accent" : "border-line"),
    ...registration,
  };

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {label}
        {optional && <span className="ml-1.5 font-normal text-muted">(optional)</span>}
      </label>
      {multiline ? <textarea rows={5} {...shared} /> : <input {...inputProps} {...shared} />}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
