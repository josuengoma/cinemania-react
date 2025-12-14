import Banner from "../../components/Banner/Banner";
import Box from "../../components/Box/Box";
import Heading from "../../components/Heading/Heading";
import './Home.css';

import { FilmContext } from "../../contexts/FilmContext";
import { useContext } from "react";
import { FaBookOpen, FaFistRaised, FaHeart, FaLaugh, FaTheaterMasks, FaVideo } from "react-icons/fa";
import PaginatedList from "../../components/Pagination/PaginatedList";


function Home() {
    const styleIcon = {
        color: "rgb(204, 32, 32)",
    };
    const { films } = useContext(FilmContext);



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

                <h2 id="categorie-film" style={{ marginBottom: '40px' }}>Films</h2>

                <div class="box-container">

                    <PaginatedList data={films} Component={Box} itemsPerPage={6} />

                </div>


            </section >
            {/* Fin Section nouveaux */}





        </>
    )
}

export default Home;