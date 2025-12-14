import React, { useContext, useState } from 'react'
import "./Blog.css"
import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'
import { useRedirect } from '../../hooks/useRedirect'
import { FilmContext } from '../../contexts/FilmContext'
import Pagination from '../../components/Pagination/Pagination'


const Blog = () => {
    const { films } = useContext(FilmContext);
    const handleClick = useRedirect()

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const filmsPerPage = 6;

    const indexOfLastFilm = currentPage * filmsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
    const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

    const totalPages = Math.ceil(films.length / filmsPerPage);

    return (
        <div>

            <section class="main-Blog" id="annonces">
                <Heading title="Annonces" />

                <div class="box-container">

                    {currentFilms.map((film) => (
                        <div class="box">
                            <div class="box2">
                                <img src={film.image} alt="" />
                            </div>
                            <div class="box2">
                                <h3>
                                    {film.title}
                                </h3>
                                <p>
                                    {film.description}
                                </p>
                                <p>Disponible le : {film.created}</p>
                            </div>
                            <Button contentBtn="Regarder maintenant" typeBtn="text" onClick={() => handleClick(film.id)} />
                        </div>
                    ))}




                </div>

                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </section>

        </div>
    )
}

export default Blog