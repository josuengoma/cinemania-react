import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { films } from '../../data/Films'



const EditSingle = () => {

    const { id } = useParams()
    const filmToEdit = films.find(f => f.id === parseInt(id))
    const [film, setFilm] = useParams(filmToEdit)

    const handleChange = (e) => {
        setFilm({ ...film, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("film modifié:", film);
        alert("Modification locale effectuée !")

        // Stockage dans l'etat locale 
    }
    return (
        <div>

            <section class="login" id="editPost">
                <h2 id="signin">Editer ce post</h2>

                <div class="row">
                    <form method="POST" enctype="multipart/form-data">
                        <div class="inputBox">
                            <h4>Titre</h4>
                            <input type="text" placeholder="Ex: forty kym" name="title_post" value="" />
                            <h4>Prix 1</h4>
                            <input type="text" name="price1_post" id="pwd" placeholder="Ex: 30" value="" />
                            <h4>Prix 2</h4>
                            <input type="text" name="price2_post" id="pwd" placeholder="Ex: 15" value="" />
                            <h4>Image</h4>
                            <input type="file" name="image_post" id="pwd" />

                            <h4>Catégorie</h4>
                            <select class="form-control" name="id_categorie">

                                <option value="" >categorie</option>

                            </select>

                            <h4>Contenu</h4>
                            <textarea name="content_post" id="" cols="30" rows="10"></textarea>
                            <h4>Visibility</h4>
                            <input type="checkbox" name="visibility_post" id="pwd" placeholder="ex:rf%3475eM" />
                        </div>
                        <input type="submit" name="updatePost" class="btn" value="Créer" />
                    </form>
                </div>

            </section>

        </div>
    )
}

export default EditSingle