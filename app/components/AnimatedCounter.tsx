import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  children?: React.ReactNode;
}

export default function AnimatedNumber({ value, children }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const [visible, setVisible] = useState(false);

  // Observe when the number enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 } // trigger when ~30% visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animate only when visible
  useEffect(() => {
    if (!visible) return;

    let start: number | null = null;
    const duration = 2000;
    const from = 0;
    const to = value;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(from + (to - from) * eased));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [visible, value]);

  return <div ref={ref}>{count}{children}</div>;
}
