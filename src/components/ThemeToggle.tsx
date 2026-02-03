"use client";
import { Display, Moon, Sun } from "react-bootstrap-icons";
import { useTheme } from "@/lib/themeContext";

export const THEME_ICON = [
  { value: "light", label: "ライトモード", icon: Sun },
  { value: "dark", label: "ダークモード", icon: Moon },
  { value: "system", label: "システム設定", icon: Display },
] as const;

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();

  return (
    <div
      role="group"
      aria-label="テーマ選択"
      className="bg-bg dark:bg-bg-dark border-border dark:border-border-dark flex w-fit items-center gap-1 rounded-full border p-1"
    >
      {THEME_ICON.map(({ value, label, icon: Icon }) => {
        const isActive = mounted && theme === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-pressed={isActive}
            aria-label={label}
            className={`group focus-visible:ring-link relative rounded-full p-1.5 transition-all outline-none focus-visible:ring-2 ${
              isActive
                ? "bg-bg-surface text-fg-body shadow-sm"
                : "dark:hover:text-fg-mute text-fg-muted hover:text-fg-body"
            }`}
          >
            <Icon size={14} aria-hidden="true" />
            <span className="sr-only">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
export default ThemeToggle;
