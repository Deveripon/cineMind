import { useContext } from "react";
import {
    MdOutlineRemoveShoppingCart,
    MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import { MovieCartContext } from "../../context/MovieCartContext";
import { ThemeContext } from "../../context/ThemeContext";

export default function Cart({ handleCartClose, movies }) {
    const { dispatch } = useContext(MovieCartContext);
    const { isDark } = useContext(ThemeContext);

    //remove movie from cart
    function handleRemoveMovie(movieId) {
        dispatch({ type: "REMOVE_FROM_CART", payload: movieId });
    }

    return (
        <div className='fixed !m-0 top-0 left-0 w-full h-screen z-50 bg-black/60 backdrop-blur-sm'>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[890px] p-4 max-h-[90vh] overflow-auto'>
                <div
                    className={` shadow-md  rounded-2xl overflow-hidden p-5 md:p-9 
                    ${isDark ? "bg-dark" : "bg-white"}`}>
                    <h2 className='text-2xl lg:text-[30px] mb-10 font-bold'>
                        Your Carts
                    </h2>
                    <div className='space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14'>
                        {movies.cartData.length > 0
                            ? movies.cartData.map((movie) => {
                                  return (
                                      <div
                                          key={movie.id}
                                          className='grid grid-cols-[1fr_auto] gap-4'>
                                          <div className='flex items-center gap-4'>
                                              <img
                                                  className='rounded overflow-hidden h-[120px]'
                                                  src={movie.posterUrl}
                                                  alt={movie.title}
                                              />
                                              <div>
                                                  <h3 className='text-base md:text-xl font-bold'>
                                                      {movie.title}
                                                  </h3>
                                                  <p className='max-md:text-xs text-[#575A6E]'>
                                                      {movie.genres.join("/")}
                                                  </p>
                                                  <span className='max-md:text-xs'>
                                                      ${movie.price}
                                                  </span>
                                              </div>
                                          </div>
                                          <div className='flex justify-between gap-4 items-center'>
                                              <button
                                                  onClick={() => {
                                                      handleRemoveMovie(
                                                          movie.id
                                                      );
                                                  }}
                                                  className='bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white'>
                                                  <MdOutlineRemoveShoppingCart />
                                                  <span className='max-md:hidden'>
                                                      Remove
                                                  </span>
                                              </button>
                                          </div>
                                      </div>
                                  );
                              })
                            : "Your Cart is empty"}
                    </div>

                    <div className='flex items-center justify-end gap-2'>
                        <a
                            className='rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm'
                            href='#'>
                            <MdOutlineShoppingCartCheckout />
                            <span>Checkout</span>
                        </a>
                        <button
                            onClick={handleCartClose}
                            className='border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm'>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

