import { createContext, useState } from "react";
import { films as data } from "../data/Films";

export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
    const [films, setFilms] = useState([...data]);

    const addFilm = (film) => {
        setFilms([...films, film]);
    };

    const deleteFilm = (id) => {
        setFilms(films.filter((film) => film.id !== id));
    };

    const updateFilm = (updatedFilm) => {
        setFilms(films.map(f => f.id === updatedFilm.id ? updatedFilm : f));
    };

    return (
        <FilmContext.Provider value={{ films, addFilm, deleteFilm, updateFilm }}>
            {children}
        </FilmContext.Provider>
    );
};

