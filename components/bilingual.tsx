import type { ReactNode } from "react";

export function Bilingual({ zh, en, className = "" }: { zh: ReactNode; en: ReactNode; className?: string }) {
  return <span className={className}><span className="lang-zh">{zh}</span><span className="lang-en">{en}</span></span>;
}
