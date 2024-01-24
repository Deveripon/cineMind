import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import Cart from "../Cart/Cart";
export default function CartButton() {
    const [cart, setCart] = useState(false);

    function handleCartShow() {
        setCart(true);
    }
    function handleCartClose() {
        setCart(false);
    }
    return (
        <>
            {cart && <Cart handleCartClose={handleCartClose} />}
            <li onClick={handleCartShow}>
                <button className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block'>
                    <IoMdCart className='text-primary' />
                </button>
            </li>
        </>
    );
}

