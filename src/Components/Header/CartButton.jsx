import { useContext } from "react";
import { IoMdCart } from "react-icons/io";
import { CartModalContext } from "../../context/CartModalContext";
import { MovieCartContext } from "../../context/MovieCartContext";
import Cart from "../Cart/Cart";
export default function CartButton() {
    const { selectedMovies } = useContext(MovieCartContext);
    const { isCartShow, setIsCartShow } = useContext(CartModalContext);

    function handleCartShow() {
        setIsCartShow(true);
    }
    function handleCartClose() {
        setIsCartShow(false);
    }

    return (
        <>
            {isCartShow && (
                <Cart
                    handleCartClose={handleCartClose}
                    movies={selectedMovies}
                />
            )}
            <li
                className='relative'
                onClick={handleCartShow}>
                <button className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] mt-[-5px] p-[8px] inline-block'>
                    <IoMdCart className='text-primary' />
                </button>

                {selectedMovies.cartData.length > 0 ? (
                    <span className='absolute rounded-full size-[30px] text-center top-[-17px] right-[-21px] bg-primary dark:bg-primary/[7%] text-white  backdrop-blur-[2px] p-1 inline-block'>
                        {selectedMovies.cartData.length}
                    </span>
                ) : (
                    ""
                )}
            </li>
        </>
    );
}

