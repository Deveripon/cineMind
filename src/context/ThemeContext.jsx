import { createContext, useState } from "react";
export const ThemeContext = createContext(true);

export default function ThemeContextProvider({ children }) {
    const [isDark, setIsDark] = useState(true);

    return (
        <>
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                {children}
            </ThemeContext.Provider>
        </>
    );
}

