import { useState } from "react";
import { getAllMovies } from "../../data/db.js";
import MovieCard from "./MovieCard.jsx";

export default function MovieList() {
    const movies = getAllMovies();
    const [allMovies, setAllMovies] = useState(movies);
    return (
        <div className=''>
            <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-7'>
                {allMovies.length > 0 ? (
                    allMovies.map((movie) => {
                        return (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        );
                    })
                ) : (
                    <h1>No Movies Found</h1>
                )}
            </div>
        </div>
    );
}

