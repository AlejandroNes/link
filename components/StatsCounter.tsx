"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsCounter({ translations }: { translations: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="stats" ref={containerRef}>
      <StatItem target="80" suffix="+" label={translations.stats.projects} startAnimation={hasAnimated} />
      <StatItem target="6" suffix="" label={translations.stats.experience} startAnimation={hasAnimated} />
      <StatItem target="98" suffix="%" label={translations.stats.satisfaction} startAnimation={hasAnimated} />
    </div>
  );
}

function StatItem({ target, suffix, label, startAnimation }: { target: string, suffix: string, label: string, startAnimation: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    const targetNum = parseInt(target, 10);
    const duration = 2000;
    const fps = 60;
    const frames = duration / (1000 / fps);
    let currentFrame = 0;

    const interval = setInterval(() => {
      currentFrame++;
      const progress = 1 - Math.pow(1 - currentFrame / frames, 3);
      setCurrent(Math.floor(targetNum * progress));

      if (currentFrame >= frames) {
        clearInterval(interval);
        setCurrent(targetNum);
      }
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [startAnimation, target]);

  return (
    <div className="stat">
      <div className="stat-num">{current}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
