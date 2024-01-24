import { createContext, useReducer, useState } from "react";
import {
    initialValue,
    movieCartReducerFunction,
} from "../reducers/MovieCartReducer";

export const MovieCartContext = createContext();

export default function MovieCartContextProvider({ children }) {
    const [selectedMovies, dispatch] = useReducer(
        movieCartReducerFunction,
        initialValue
    );
    const [isSelected, setIsSelected] = useState(false);
    return (
        <>
            <MovieCartContext.Provider
                value={{ selectedMovies, dispatch, isSelected, setIsSelected }}>
                {children}
            </MovieCartContext.Provider>
        </>
    );
}

