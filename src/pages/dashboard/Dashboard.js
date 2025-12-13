import React from 'react'
import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'
import "./Dashboard.css"
import { Link } from 'react-router-dom'
import { FaBook, FaFilm, FaGamepad, FaMusic, FaPlay } from 'react-icons/fa'
import { BiFontSize } from 'react-icons/bi'
const Dashboard = () => {
    const styleIcon = {
        color: "rgb(204, 32, 32)",
    };
    return (
        <div>
            <Heading title="Dashboard" />
            <Link to="/dashboard/editAll" className='btn'>Editer tous les posts</Link>

            <section class="dashboard" id="revu">
                <div class="box-container">
                    <a href="#categorie-film">
                        <div class="box">
                            <FaFilm style={styleIcon} size="30" />

                            <h3>Films</h3>
                            <p>12</p>
                        </div>
                    </a>

                    <a href="#categorie-film">
                        <div class="box">
                            <FaFilm style={styleIcon} size="30" />
                            <h3>Séries</h3>
                            <p>45</p>
                        </div>
                    </a>

                    <a href="#categorie-film">
                        <div class="box">
                            <FaFilm style={styleIcon} size="30" />
                            <h3>Animés</h3>
                            <p>55</p>
                        </div>
                    </a>

                    <a href="#categorie-film">
                        <div class="box">
                            <FaMusic style={styleIcon} size="30" />
                            <h3>Musics</h3>
                            <p>23</p>
                        </div>
                    </a>

                    <a href="#categorie-film">
                        <div class="box">
                            <FaGamepad style={styleIcon} size="30" />
                            <h3>Jeux</h3>
                            <p>9</p>
                        </div>
                    </a>

                    <a href="#categorie-film">
                        <div class="box">
                            <FaBook style={styleIcon} size="30" />

                            <h3>Livres</h3>
                            <p>11</p>
                        </div>
                    </a>
                </div>
            </section>


        </div>
    )
}

export default Dashboard