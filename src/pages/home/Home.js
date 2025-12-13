import Banner from "../../components/Banner/Banner";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import './Home.css';

import { FilmContext } from "../../contexts/FilmContext";
import { useContext } from "react";
import { FaBolt, FaBookOpen, FaFilm, FaFistRaised, FaHeart, FaLaugh, FaMagic, FaTheaterMasks, FaVideo } from "react-icons/fa";

function Home() {
    const styleIcon = {
        color: "rgb(204, 32, 32)",
    };
    const { films, addFilm, deleteFilm } = useContext(FilmContext);
    return (
        <>
            <Banner />

            {/* Section revu */}
            <section class="revu" id="revu">

                <Heading title="revu" />

                <div class="box-container">


                    <a href="#categorie-film">
                        <div class="box">
                            <FaFistRaised style={styleIcon} size="30" />
                            <h3>
                                Action
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae exercitationem doloremque,
                                adipisci aut veritatis ad iusto dicta molestias in beatae accusamus mollitia sunt porro rerum
                                tenetur ullam officia odio.
                            </p>
                        </div>
                    </a>

                    <a href="#categorie-film">
                        <div class="box">
                            <FaLaugh style={styleIcon} size="30" />
                            <h3>
                                Comédie
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae exercitationem doloremque,
                                adipisci aut veritatis ad iusto dicta molestias in beatae accusamus mollitia sunt porro rerum
                                tenetur ullam officia odio.
                            </p>
                        </div>
                    </a>

                    <a href="#categorie-film">
                        <div class="box">
                            <FaTheaterMasks style={styleIcon} size="30" />
                            <h3>
                                Drame
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae exercitationem doloremque,
                                adipisci aut veritatis ad iusto dicta molestias in beatae accusamus mollitia sunt porro rerum
                                tenetur ullam officia odio.
                            </p>
                        </div>
                    </a>

                    <a href="#categorie-film">
                        <div class="box">
                            <FaVideo style={styleIcon} size="30" />
                            <h3>
                                Animation
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae exercitationem doloremque,
                                adipisci aut veritatis ad iusto dicta molestias in beatae accusamus mollitia sunt porro rerum
                                tenetur ullam officia odio.
                            </p>
                        </div>
                    </a>

                    <a href="#categorie-film">
                        <div class="box">
                            <FaBookOpen style={styleIcon} size="30" />
                            <h3>
                                Documentaire
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae exercitationem doloremque,
                                adipisci aut veritatis ad iusto dicta molestias in beatae accusamus mollitia sunt porro rerum
                                tenetur ullam officia odio.
                            </p>
                        </div>
                    </a>

                    <a href="#categorie-film">
                        <div class="box">
                            <FaHeart style={styleIcon} size="30" />
                            <h3>
                                Romantique
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae exercitationem doloremque,
                                adipisci aut veritatis ad iusto dicta molestias in beatae accusamus mollitia sunt porro rerum
                                tenetur ullam officia odio.
                            </p>
                        </div>
                    </a>


                </div>
            </section>
            {/* Fin section revu */}


            {/* Section nouveaux  */}
            <section class="nouveaux" id="nouveaux">

                <Heading title="nouveaux" />

                <h2 id="categorie-film">Films</h2>

                <div class="box-container">
                    {films.map((film) => (
                        <Box key={film.id} id={film.id} image={film.image} title={film.title} description={film.description} price1={film.price1} price2={film.price2} contentBtn={film.contentBtn} />
                    ))}


                </div>
            </section>
            {/* Fin Section nouveaux */}





        </>
    )
}

export default Home;