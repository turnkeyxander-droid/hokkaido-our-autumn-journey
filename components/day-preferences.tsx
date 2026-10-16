"use client";

import { Languages, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";
type Language = "zh" | "en";

const THEME_KEY = "hokkaido-theme";
const LANGUAGE_KEY = "hokkaido-day-language";

export function DayPreferences() {
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "zh";
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    document.documentElement.dataset.theme = savedTheme;
    document.documentElement.dataset.language = savedLanguage;
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
    document.documentElement.dataset.theme = next;
  };

  const toggleLanguage = () => {
    const next = language === "zh" ? "en" : "zh";
    setLanguage(next);
    localStorage.setItem(LANGUAGE_KEY, next);
    document.documentElement.dataset.language = next;
  };

  return <div className="day-preferences flex items-center gap-1.5" aria-label="Display preferences">
    <button type="button" onClick={toggleTheme} className="preference-button inline-flex min-h-10 items-center gap-2 rounded-full border border-[#18352f]/12 bg-white/65 px-3 text-xs font-bold text-[#48635d] transition hover:bg-white" aria-label={theme === "light" ? "切换深色模式" : "切换浅色模式"}>
      {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
      <span className="lang-zh">{theme === "light" ? "深色" : "浅色"}</span><span className="lang-en">{theme === "light" ? "Dark" : "Light"}</span>
    </button>
    <button type="button" onClick={toggleLanguage} className="preference-button inline-flex min-h-10 items-center gap-2 rounded-full border border-[#18352f]/12 bg-white/65 px-3 text-xs font-bold text-[#48635d] transition hover:bg-white" aria-label={language === "zh" ? "Switch to English" : "切换到中文"}>
      <Languages size={15} /> {language === "zh" ? "EN" : "中文"}
    </button>
  </div>;
}
