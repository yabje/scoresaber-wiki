"use client";

import type { ComponentProps } from "react";
import { useEffect, useState } from "react";
import type { ThemeSwitchProps } from "fumadocs-ui/layouts/shared/slots/theme-switch";
import { Moon, Sun } from "lucide-react";
import { twMerge } from "tailwind-merge";

const storageKey = "theme";

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeSwitch({ className, mode: _mode, ...props }: ThemeSwitchProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    const nextTheme = stored === "light" ? "light" : "dark";

    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <button
      {...(props as ComponentProps<"button">)}
      type="button"
      aria-label="Toggle Theme"
      className={twMerge(
        "inline-flex items-center rounded-full border p-1 overflow-hidden *:rounded-full",
        className,
      )}
      data-theme-toggle=""
      onClick={toggleTheme}
    >
      <Sun
        aria-hidden="true"
        fill="currentColor"
        className={twMerge(
          "size-6.5 p-1.5 text-fd-muted-foreground",
          theme === "light" && "bg-fd-accent text-fd-accent-foreground",
        )}
      />
      <Moon
        aria-hidden="true"
        fill="currentColor"
        className={twMerge(
          "size-6.5 p-1.5 text-fd-muted-foreground",
          theme === "dark" && "bg-fd-accent text-fd-accent-foreground",
        )}
      />
    </button>
  );
}
