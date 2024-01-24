import { useState } from "react";
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

    return (
        <>
            {movieDetailsModal && (
                <MovieDetailsModal
                    closeModal={closeModal}
                    movie={movie}
                />
            )}
            <div onClick={handleMovieDetailsModal}>
                <figure className='p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl'>
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
                        <a
                            className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'
                            href='#'>
                            <img
                                src='./assets/tag.svg'
                                alt=''
                            />
                            <span>${movie.price} | Add to Cart</span>
                        </a>
                    </figcaption>
                </figure>
            </div>
        </>
    );
}

