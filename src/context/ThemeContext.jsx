import { createContext, useState } from "react";
export const ThemeContext = createContext(true);

export default function ThemeContextProvider({ children }) {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC

    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }
    const theme = localStorage.theme;

    const [isDark, setIsDark] = useState(theme);

    return (
        <>
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                {children}
            </ThemeContext.Provider>
        </>
    );
}

