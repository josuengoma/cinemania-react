import React, { useState, useContext } from 'react'
import "./Single.css"
import { useParams } from 'react-router-dom'
// import { films as filmsData } from '../../data/Films'
import { FaMoneyBill, FaPlay, FaShoppingCart, FaStar } from 'react-icons/fa'
import { FilmContext } from '../../contexts/FilmContext'



const Single = () => {


    // important
    const { id } = useParams();
    const { films, updateFilm } = useContext(FilmContext);
    const film = films.find(f => f.id === parseInt(id));

    const [title, setTitle] = useState(film.title);
    const [price1, setPrice1] = useState(film.price1);
    const [price2, setPrice2] = useState(film.price2);
    const [categorie, setCategorie] = useState(film.categorie);
    const [description, setDescription] = useState(film.description);
    const [episode, setEpisode] = useState(film.episode);
    const [created, setCreated] = useState(film.created);
    const [avis, setAvis] = useState(film.avis);
    const [image, setImage] = useState(film.image);

    const categories = ["Action", "Comédie", "Drame", "Animation", "Documentaire"]

    const handleSubmit = (e) => {
        e.preventDefault();
        // Crée un film mis à jour
        const updatedFilm = {
            ...film,
            title, price1, price2, categorie, description, episode, created, avis, image
        };
        updateFilm(updatedFilm);
        alert('Modification effectuée avec succès')
        // Redirige vers la page liste ou détail
        // navigate('/dashboard/editAll');
        //navigate('/all'); // 
        // navigate(`/single/${id}`);
    };


    if (!film) return <p>Film non retrouvé</p>;

    return (
        <div>




            <section className="main-single" >
                <div className="box-container">
                    <div className="box">
                        {image && <img src={image} alt="aperçu" />}

                    </div>
                    <div className="box">
                        <h3>
                            {film.title}
                        </h3>
                        <p>
                            {film.description}
                        </p>
                        <a href=".btn" className="btn">Lecture <FaPlay /></a>
                        <a href=".btn" className="btn">Achat <FaMoneyBill /></a>
                        <a href=".btn" className="btn">Ajouter <FaShoppingCart /></a>
                    </div>

                </div>
                <div className="box-container2">

                    <div className="box2">
                        <div className="container">
                            <h3>Informations</h3>
                            <p>Publié le : {film.created}</p>
                            <p>Prix : ${film.price2}</p>
                            <p>Catégorie : {film.categorie}</p>
                        </div>
                        <div className="container">
                            <h3>Episodes</h3>
                            <p>{film.episode} épisodes</p>
                        </div>
                        <div className="container">
                            <h3>Avis</h3>
                            <div classNameName="stars">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} color='gold' />

                                ))}
                            </div>
                            <p>{film.avis}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="form" >
                <h2 id="signin">Editer ce film</h2>

                <div className="row">
                    <form onSubmit={handleSubmit} enctype="multipart/form-data">
                        <div className="inputBox">
                            <div className="inputGroup">
                                <label>Titre</label>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex: forty kym" />
                            </div>
                            <div className="inputGroup">
                                <label>Prix 1</label>
                                <input value={price1} onChange={(e) => setPrice1(e.target.value)} placeholder="Ex: 30" />
                            </div>
                            <div className="inputGroup">
                                <label>Prix 2</label>
                                <input value={price2} onChange={(e) => setPrice2(e.target.value)} placeholder="Ex: 15" />
                            </div>
                            <div className="inputGroup">
                                <label>Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            const url = URL.createObjectURL(file);
                                            setImage(url);
                                        }
                                    }}
                                />
                            </div>
                            <div className="inputGroup">
                                <label>Catégorie</label>
                                <select className="form-control" value={categorie} name="id_categorie" onChange={(e) => setCategorie(e.target.value)}>
                                    <option value="" >--- Choisir une catégorie ---</option>
                                    {categories.map((cat, index) => (<option key={index} value={cat}>{cat}</option>))}
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>Episodes</label>
                                <input value={episode} onChange={(e) => setEpisode(e.target.value)} placeholder="Ex: 15" />
                            </div>
                            <div className="inputGroup">
                                <label>Date de publication</label>
                                <input value={created} onChange={(e) => setCreated(e.target.value)} placeholder="Ex: 30 Avril 2025" />
                            </div>
                            <div className="inputGroup">
                                <label>Contenu</label>
                                <textarea onChange={(e) => setDescription(e.target.value)} cols="30" rows="10" value={description}></textarea>
                            </div>
                            <div className="inputGroup">
                                <label>Avis du client</label>
                                <textarea onChange={(e) => setAvis(e.target.value)} cols="30" rows="10" value={avis}></textarea>
                            </div>
                        </div>
                        <input type="submit" name="updatePost" className="btn" value="Modifier" />
                    </form>
                </div>

            </section>
        </div>
    )
}

export default Single