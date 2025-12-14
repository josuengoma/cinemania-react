import React, { useContext } from 'react'
import { FilmContext } from '../../contexts/FilmContext';
import { FaBookOpen, FaFilm, FaFistRaised, FaGhost, FaHeart, FaLaugh, FaTheaterMasks, FaVideo } from 'react-icons/fa'

const CategorieList = () => {

    const styleIcon = {
        color: "rgb(204, 32, 32)",
    };

    const { films } = useContext(FilmContext);
    // Regrouper les films par categories

    const categories = films.reduce((acc, film) => {
        acc[film.categorie] = (acc[film.categorie] || 0) + 1;
        return acc;
    }, {});

    const categorieIcons = {
        Action: <FaFistRaised style={styleIcon} size="30" />,
        Comédie: <FaLaugh style={styleIcon} size="30" />,
        Drame: <FaTheaterMasks style={styleIcon} size="30" />,
        Animation: <FaVideo style={styleIcon} size="30" />,
        Documentaire: <FaBookOpen style={styleIcon} size="30" />,
        Romantique: <FaHeart style={styleIcon} size="30" />,
        Horeur: <FaGhost style={styleIcon} size="30" />,
    }

    return (
        <div>
            <section class="dashboard" id="revu">
                <div class="box-container">

                    {Object.entries(categories).map(([cat, count]) => (
                        <a href={`#categorie-${cat}`} key={cat}>
                            <div class="box">
                                {categorieIcons[cat] || <FaFilm style={styleIcon} size="30" />}
                                <h3>
                                    {cat}
                                </h3>
                                <p>
                                    {count} film(s)
                                </p>
                            </div>
                        </a>
                    ))}


                </div>
            </section>
        </div>
    )
}

export default CategorieList