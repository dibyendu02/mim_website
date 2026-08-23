import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-2xl border border-ink/15 bg-surface px-4 py-3 text-sm text-ink placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20",
          className,
        )}
        {...props}
      />
    );
  },
);

export const TextArea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function TextArea({ className, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        rows={5}
        className={cn(
          "w-full rounded-2xl border border-ink/15 bg-surface px-4 py-3 text-sm text-ink placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20",
          className,
        )}
        {...props}
      />
    );
  },
);
