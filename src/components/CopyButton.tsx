"use client";

import { useCallback, useState } from "react";

type Props = {
  text: string;
  className?: string;
};

export function CopyButton({ text, className = "" }: Props) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={onCopy}
      className={`inline-flex min-h-11 min-w-[88px] shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-youtube px-5 py-3 text-sm font-bold leading-[1.4] text-on-primary shadow-button active:bg-youtube-active active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-youtube motion-reduce:active:scale-100 ${copied ? "copy-button-success" : ""} ${className}`}
    >
      {copied ? (
        <span className="flex items-center gap-2">
          <CheckIcon />
          복사됨
        </span>
      ) : (
        "복사"
      )}
    </button>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
