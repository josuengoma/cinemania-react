import './Footer.css'
function Footer() {
    return (
        <>
            <footer className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>A propos de nous</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas magni pariatur est
                            accusantium voluptas enim nemo facilis sit debitis.</p>
                    </div>
                    <div className="box">
                        <h3>Retrouvez notre plateforme</h3>
                        <a href="#">RDC</a>
                        <a href="#">Cameroun</a>
                        <a href="#">Afrique du sud</a>
                        <a href="#">france</a>
                    </div>
                    <div className="box">
                        <h3>liens rapides</h3>
                        <a href="#home">acceuil</a>
                        <a href="#revu">révu</a>
                        <a href="#nouveaux">nouveautés</a>
                        <a href="#catalogue">catalogue</a>
                        <a href="#annonces">annonces</a>
                    </div>
                    <div className="box">
                        <h3>Suivez-nous sur</h3>
                        <a href="#"><i className="fa fa-facebook fa-1x"></i> facebook</a>
                        <a href="#"><i className="fa fa-instagram fa-1x"></i> instagram</a>
                        <a href="#"><i className="fa fa-twitter fa-1x"></i> twitter</a>
                        <a href="#"><i className="fa fa-linkedin fa-1x"></i> linkedin</a>
                    </div>

                </div>

                <h1 className="credit"> Crée par <span> JosCenter </span> | Tous droits reservés! </h1>

            </footer>
        </>
    )
}

export default Footer;