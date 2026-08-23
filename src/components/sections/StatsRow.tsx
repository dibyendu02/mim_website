import { AnimatedCounter } from "@/components/sections/AnimatedCounter";
import type { Metric } from "@/lib/types/content";
import { cn } from "@/lib/cn";

export function StatsRow({ metrics, className }: { metrics: Metric[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-8 sm:grid-cols-4", className)}>
      {metrics.map((metric) => (
        <div key={metric.label}>
          <p className="font-display text-display-md font-semibold text-ink">
            <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
          </p>
          <p className="mt-2 text-sm text-text-muted">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
