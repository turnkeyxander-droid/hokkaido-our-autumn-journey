"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 480);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-4 z-[60] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#18352f] text-white shadow-[0_10px_30px_rgba(24,53,47,.28)] transition duration-300 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] lg:bottom-6 lg:right-6 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <ArrowUp size={18} strokeWidth={2.2} />
    </button>
  );
}
