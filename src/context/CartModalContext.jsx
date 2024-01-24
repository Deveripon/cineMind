import { createContext, useState } from "react";

export const CartModalContext = createContext(false);

export default function CartModalContextProvider({ children }) {
    const [isCartShow, setIsCartShow] = useState(false);
    return (
        <>
            <CartModalContext.Provider value={{ isCartShow, setIsCartShow }}>
                {children}
            </CartModalContext.Provider>
        </>
    );
}

