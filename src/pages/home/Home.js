import Banner from "../../components/Banner/Banner";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import './Home.css'
function Home() {
    const films = [
        {
            images: "assets/images/film-1.jpeg",
            title: "Contenu-1",
            description: "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Rem Autem In Ratione! Atque Iure, Dignissimos Iusto Sequi Voluptate, Perferendis Quo Alias Sapiente Adipisci Facilis Odio, Officia Sunt Perspiciatis Eveniet Aliquam?",
            price1: "12$",
            price2: "24$",
            contentBtn: "Regarder maintenant",
        },
        {
            images: "assets/images/film-2.jpg",
            title: "Contenu-2",
            description: "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Rem Autem In Ratione! Atque Iure, Dignissimos Iusto Sequi Voluptate, Perferendis Quo Alias Sapiente Adipisci Facilis Odio, Officia Sunt Perspiciatis Eveniet Aliquam?",
            price1: "25$",
            price2: "50$",
            contentBtn: "Regarder maintenant",
        },
        {
            images: "assets/images/film-3.jpg",
            title: "Contenu-3",
            description: "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Rem Autem In Ratione! Atque Iure, Dignissimos Iusto Sequi Voluptate, Perferendis Quo Alias Sapiente Adipisci Facilis Odio, Officia Sunt Perspiciatis Eveniet Aliquam?",
            price1: "25$",
            price2: "50$",
            contentBtn: "Regarder maintenant",
        },
    ];
    return (
        <>
            <Banner />

            {/* Section revu */}
            <section class="revu" id="revu">

                <Heading title="revu" />

                <div class="box-container">


                    <a href="#categorie-film">
                        <div class="box">
                            <i class="fa fa-file fa-1x"></i>
                            <h3>
                                test
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
                    {films.map((film, index) => (
                        <Box key={index} image={film.image} title={film.title} description={film.description} price1={film.price1} price2={film.price2} contentBtn={film.contentBtn} />
                    ))}

                    <Button title="Voir plus" typeBtn="text" />
                </div>
            </section>
            {/* Fin Section nouveaux */}


            {/* section catalogue */}
            <section class="catalogue" id="catalogue">

                <Heading title="catalogues" />


                <h2 id="categorie-film">Films</h2>
                <div class="box-container">


                    <Box image="" title="Contenu-1" description="Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Rem Autem In Ratione! Atque Iure, Dignissimos Iusto Sequi Voluptate, Perferendis Quo Alias Sapiente Adipisci Facilis Odio, Officia Sunt Perspiciatis Eveniet Aliquam?" price1="25" price2="50" contentBtn="Regarder maintenant" />
                    <Box image="" title="Contenu-1" description="Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Rem Autem In Ratione! Atque Iure, Dignissimos Iusto Sequi Voluptate, Perferendis Quo Alias Sapiente Adipisci Facilis Odio, Officia Sunt Perspiciatis Eveniet Aliquam?" price1="25" price2="50" contentBtn="Regarder maintenant" />
                    <Box image="" title="Contenu-1" description="Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Rem Autem In Ratione! Atque Iure, Dignissimos Iusto Sequi Voluptate, Perferendis Quo Alias Sapiente Adipisci Facilis Odio, Officia Sunt Perspiciatis Eveniet Aliquam?" price1="25" price2="50" contentBtn="Regarder maintenant" />



                </div>

            </section>
            {/* Fin section catalogue */}


        </>
    )
}

export default Home;