import React from 'react'
import "./Login.css"
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
const Login = () => {
    const styleBtnForm = {
        display: "flex",
        paddingLeft: "215px",
    };

    return (
        <>
            <Heading title="Connexion" />
            <section className="login" id="login">
                <h2 id="signin">Se connecter</h2>
                <div className="row">
                    <form method="POST">
                        <div className="inputBox">
                            <div className="inputGroup">
                                <label>Email</label>
                                <input type="email" name="email_user" placeholder="ex:fresh.guy@gmail.com" value="" /> <br />
                            </div>
                            <div className="inputGroup">
                                <label>Mot de passe</label>
                                <input type="password" name="password_user" id="pwd" placeholder="ex:rf%3475eM" />
                            </div>

                        </div>
                        <div style={styleBtnForm}>
                            <Button contentBtn="Se connecter2" typeBtn="submit" nameBtn="login" />
                            <a href="" class="btn">s'abonner</a>
                        </div>
                    </form>
                </div >
            </section >
        </>
    )
}

export default Login