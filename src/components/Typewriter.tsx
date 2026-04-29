"use client";

import {
  Fragment,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Props = {
  lines: string[];
  className?: string;
  charMs?: number;
  initialDelayMs?: number;
  cursorClassName?: string;
};

export function Typewriter({
  lines,
  className = "",
  charMs = 38,
  initialDelayMs = 280,
  cursorClassName = "bg-youtube",
}: Props) {
  const graphemeLines = useMemo(
    () => lines.map((line) => Array.from(line)),
    [lines],
  );
  const total = useMemo(
    () => graphemeLines.reduce((acc, line) => acc + line.length, 0),
    [graphemeLines],
  );
  const linePrefixes = useMemo(() => {
    const result: number[] = [];
    let acc = 0;
    for (const chars of graphemeLines) {
      result.push(acc);
      acc += chars.length;
    }
    return result;
  }, [graphemeLines]);
  const fullText = useMemo(() => lines.join("\n"), [lines]);

  const [shown, setShown] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let n = 0;

    const tick = () => {
      if (cancelled) return;
      n += 1;
      setShown(n);
      if (n >= total) return;
      timeoutId = setTimeout(tick, charMs);
    };

    timeoutId = setTimeout(tick, initialDelayMs);

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [reduced, total, charMs, initialDelayMs]);

  const effectiveShown = reduced ? total : shown;
  const typing = !reduced && shown < total;

  const renderedLines: ReactNode[] = graphemeLines.map((chars, idx) => {
    const start = linePrefixes[idx];
    const take = Math.max(0, Math.min(chars.length, effectiveShown - start));
    const visible = chars.slice(0, take).join("");
    return (
      <Fragment key={idx}>
        {idx > 0 ? <br /> : null}
        <span>{visible}</span>
      </Fragment>
    );
  });

  return (
    <p className={`relative ${className}`.trim()}>
      <span className="sr-only">{fullText}</span>

      <span aria-hidden="true" className="invisible block">
        {lines.map((line, idx) => (
          <Fragment key={`reserve-${idx}`}>
            {idx > 0 ? <br /> : null}
            {line || "\u00A0"}
          </Fragment>
        ))}
      </span>

      <span aria-hidden="true" className="absolute inset-0 block">
        {renderedLines}
        {typing ? (
          <span
            aria-hidden="true"
            className={`ms-px inline-block h-[0.95em] w-[2px] translate-y-[2px] align-baseline animate-pulse motion-reduce:animate-none ${cursorClassName}`}
          />
        ) : null}
      </span>
    </p>
  );
}
