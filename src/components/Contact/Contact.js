import './Contact.css'

function Contact() {
    return (
        <>
            <section className="login" id="login">
                <h2 id="signin">Contact</h2>
                <div className="row">
                    <form method="POST">
                        <div className="inputBox">
                            <h3>Adresse Mail</h3>
                            <input type="email" name="email_user" placeholder="ex:fresh.guy@gmail.com" value="" />
                            <h3>Mot de passe</h3>
                            <input type="password" name="password_user" id="pwd" placeholder="ex:rf%3475eM" />
                        </div>
                        <input type="submit" name="login" class="btn" value="se connecter" />
                        <a href="" class="btn">s'abonner</a>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;