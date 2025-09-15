import { create } from "zustand";

export const useTheme = create((set) => ({
  theme: (() => localStorage.getItem("theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"))(),
  setTheme: (t) => {
    localStorage.setItem("theme", t);
    document.documentElement.setAttribute("data-theme", t);
    set({ theme: t });
  },
  toggle: () => set((s) => {
    const t = s.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", t);
    document.documentElement.setAttribute("data-theme", t);
    return { theme: t };
  }),
}));

// aplica tema al boot:
document.documentElement.setAttribute(
  "data-theme",
  localStorage.getItem("theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
);