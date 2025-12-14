import React, { useState, useContext } from 'react'
import Heading from '../../components/Heading/Heading'
import "./Edits.css"
import Button from '../../components/Button/Button'
import { useRedirect } from '../../hooks/useRedirect'
import { FaEdit, FaEye, FaTrash, FaStar } from 'react-icons/fa'
import { FilmContext } from '../../contexts/FilmContext'
import Pagination from '../../components/Pagination/Pagination'


const All = () => {
    const styleFooterBox = { display: "flex" };



    const handleClick = useRedirect();


    // const [films, setFilms] = useState(filmsData);
    const { films, addFilm, deleteFilm } = useContext(FilmContext);

    // Creation des films
    const [title, setTitle] = useState('');
    const [price1, setPrice1] = useState('');
    const [image, setImage] = useState(null);
    const [categorie, setCategorie] = useState('');
    const [description, setDescription] = useState('');
    const [episode, setEpisode] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddFilm = (e) => {
        e.preventDefault();
        const newFilm = {
            id: Date.now(),
            image,
            title,
            description,
            price1,
            categorie,
            episode,
            created: Date.now(),
        };
        // setFilms([newFilm, ...films]);
        addFilm(newFilm);
        alert('Film ajouté  avec succès')
        // Reinitialiser les champs
        setTitle('');
        setPrice1('');
        setImage(null);
        setCategorie('');
        setDescription('');
        setEpisode('');
    };


    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const filmsPerPage = 6;

    const indexOfLastFilm = currentPage * filmsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
    const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

    const totalPages = Math.ceil(films.length / filmsPerPage);



    return (
        <div>



            <Heading title="Toutes-categories" />
            <section className="editAll" id="catalogue">
                <div className="box-container">
                    {currentFilms.map((film) => (
                        <div className="box">
                            <div className="box2">
                                <img src={film.image} alt="" />
                            </div>
                            <div className="box2">
                                <h3>
                                    {film.title}
                                </h3>
                                <p>
                                    {film.description.slice(0, 100)} ...
                                </p>
                            </div>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} color='gold' />

                                ))}
                            </div>
                            <p>Prix : {film.price1}$</p>
                            <div style={styleFooterBox}>
                                <Button contentBtn={<FaEye />} typeBtn="text" onClick={() => handleClick(film.id)} />
                                <Button contentBtn={<FaEdit />} typeBtn="text" onClick={() => handleClick(film.id)} />
                                <Button contentBtn={<FaTrash />} typeBtn="text" onClick={() => deleteFilm(film.id)} />
                                {/* <Link to={`/single/${film.id}`}>Voir</Link> */}
                            </div>
                        </div>
                    ))}

                </div>

                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </section >


            <section class="login" id="login">
                <h2 id="signin">Ajouter un nouveau post</h2>
                <div className="row">
                    <form onSubmit={handleAddFilm} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div className="inputBox">
                            <div className="inputGroup">
                                <label>Titre</label>
                                <input
                                    type="text"
                                    placeholder="Titre"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="inputGroup">
                                <label>Catégorie</label>
                                <select
                                    value={categorie}
                                    onChange={(e) => setCategorie(e.target.value)}
                                    required
                                >
                                    <option value="">-- Choisir une catégorie --</option>
                                    <option value="Action">Action</option>
                                    <option value="Comédie">Comédie</option>
                                    <option value="Drame">Drame</option>
                                    <option value="Animation">Animation</option>
                                    <option value="Documentaire">Documentaire</option>
                                    <option value="Romantique">Romantique</option>
                                    <option value="Horeur">Horeur</option>
                                </select>
                            </div>

                            <div className="inputGroup">
                                <label>Description</label>
                                <textarea
                                    placeholder="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                    required
                                />
                            </div>

                            <div className="inputGroup">
                                <label>Prix </label>
                                <input
                                    type="number"
                                    placeholder="Prix"
                                    value={price1}
                                    onChange={(e) => setPrice1(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="inputGroup">
                                <label>Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    required
                                />
                            </div>

                            <div className="inputGroup">
                                <label>Episodes</label>
                                <input
                                    type="number"
                                    placeholder="Nombre d'episodes"
                                    value={episode}
                                    onChange={(e) => setEpisode(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn">Ajouter le film</button>
                    </form>

                </div>
            </section>
        </div >
    )
}

export default All