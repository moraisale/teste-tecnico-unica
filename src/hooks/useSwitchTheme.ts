// hooks/useTheme.ts

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function useSwitchTeme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      // Detecta o tema do sistema operacional
      const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkQuery.matches) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  return [theme, toggleTheme];
}

export default useSwitchTeme;
