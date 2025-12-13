import React, { useContext } from 'react'
import "./Blog.css"
import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'
import { useRedirect } from '../../hooks/useRedirect'
import { FilmContext } from '../../contexts/FilmContext'


const Blog = () => {
    const { films, addFilm, deleteFilm } = useContext(FilmContext);
    const handleClick = useRedirect()

    return (
        <div>

            <section class="annonces" id="annonces">
                <Heading title="Annonces" />

                <div class="box-container">

                    {films.map((film) => (
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
            </section>

        </div>
    )
}

export default Blog