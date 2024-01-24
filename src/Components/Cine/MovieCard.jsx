import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CartModalContext } from "../../context/CartModalContext";
import { MovieCartContext } from "../../context/MovieCartContext";
import { ThemeContext } from "../../context/ThemeContext";
import MovieDetailsModal from "./MovieDetailsModal";
import Ratings from "./Ratings";

export default function MovieCard({ movie }) {
    //handle movie details modal
    const [movieDetailsModal, setMovieDetailsModal] = useState(false);

    //handle modal close
    function closeModal() {
        setMovieDetailsModal(false);
    }

    //handle movie show
    function handleMovieDetailsModal(e) {
        e.preventDefault();
        setMovieDetailsModal(true);
    }

    //manage movie selections
    const { selectedMovies, dispatch } = useContext(MovieCartContext);
    const { setIsCartShow } = useContext(CartModalContext);

    //handle movie selections
    function handleAddToCart(e, movie) {
        e.stopPropagation();
        dispatch({ type: "ADD_TO_CART", payload: movie });
        toast.success(movie.title + " added to cart", {
            position: "top-center",
        });
    }

    //handle add to to cart button
    const isSelectedMovie = selectedMovies.cartData.find(
        (item) => item.id === movie.id
    );

    //controlling theme by context
    const { isDark } = useContext(ThemeContext);
    return (
        <>
            {movieDetailsModal && (
                <MovieDetailsModal
                    closeModal={closeModal}
                    movie={movie}
                    handleAddToCart={handleAddToCart}
                    setIsCartModalShow={setIsCartShow}
                />
            )}
            <div onClick={handleMovieDetailsModal}>
                <figure
                    className={` p-4 border shadow-sm rounded-xl ${
                        isDark ? "border-white/10 " : "border-black/10 "
                    }`}>
                    <img
                        className='w-full object-cover'
                        src={movie.posterUrl}
                        alt='poster'
                    />
                    <figcaption className='pt-4'>
                        <h3 className='text-xl mb-1'>{movie.title}</h3>
                        <p className='text-[#575A6E] text-sm mb-2'>
                            {movie.genres.join("/")}
                        </p>
                        <Ratings rating={movie.rating} />

                        {!isSelectedMovie && (
                            <button
                                onClick={(e) => {
                                    handleAddToCart(e, movie);
                                }}
                                className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'>
                                <img
                                    src='./assets/tag.svg'
                                    alt=''
                                />
                                <span>${movie.price} | Add to Cart</span>
                            </button>
                        )}
                        {isSelectedMovie && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsCartShow(true);
                                }}
                                className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'>
                                <img
                                    src='./assets/tag.svg'
                                    alt=''
                                />
                                <span>Go to Cart</span>
                            </button>
                        )}
                    </figcaption>
                </figure>
            </div>
        </>
    );
}

