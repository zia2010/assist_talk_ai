"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 98, suffix: "%", label: "Accuracy" },
  { value: 0, suffix: "", label: "Wait Time" },
  { value: 24, suffix: "/7", label: "Operational" },
  { value: 4.2, suffix: "x", label: "ROI Multiplier", decimals: 1 },
];

function useCountUp(
  end: number,
  duration: number,
  decimals: number,
  start: boolean
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf: number;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    }

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, decimals, start]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  decimals = 0,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, decimals, inView);

  return (
    <div className="text-center">
      <p className="mb-1 text-4xl font-extrabold text-primary">
        {decimals > 0 ? count.toFixed(decimals) : count}
        {suffix}
      </p>
      <p className="text-xs font-bold uppercase tracking-widest text-orange-800">
        {label}
      </p>
    </div>
  );
}

export function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-orange-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
