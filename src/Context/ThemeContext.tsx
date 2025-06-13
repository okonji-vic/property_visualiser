import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

/*
  =============================================
  ThemeContext: Manages light & dark themes
  =============================================

  - This context provides global theme management across the app.
  - It allows components to access & modify the theme dynamically.
  - The theme state persists using localStorage for a consistent experience.
*/

// Defines the structure of theme-related data & functions available in ThemeContext
interface ThemeContextType {
  theme: "light" | "dark"; // Stores the current theme (light or dark mode)
  toggleTheme: () => void; // Function to switch between themes
}

// Creating ThemeContext with a default value of undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/*
  =============================================
  ThemeProvider Component: Wraps around the app
  =============================================

  - Maintains theme state & provides toggle functionality.
  - Applies the selected theme to the document globally.
  - Ensures user preference persists via localStorage.
*/

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Retrieves saved theme or defaults to "light"
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    // Applies the theme to the entire document for global styling
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Saves preference for future visits
  }, [theme]);

  // Function to toggle between light & dark themes dynamically
  const toggleTheme = () => {
     console.log("Toggling theme...  ", theme);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Provides theme state & toggle function to all child components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/*
  =============================================
  useTheme Hook: Access theme context easily
  =============================================

  - Allows components to retrieve & modify theme settings.
  - Ensures proper usage within ThemeProvider.
*/

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
