import { createContext, useState } from "react";
export const ThemeContext = createContext(true);

export default function ThemeContextProvider({ children }) {
    const [isDark, setIsDark] = useState(true);

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC

    if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    if (isDark === true) {
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }

    return (
        <>
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                {children}
            </ThemeContext.Provider>
        </>
    );
}

