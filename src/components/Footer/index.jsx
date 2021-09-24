import "../css/styles.css"
import { RiCopyrightLine } from 'react-icons/ri'
const Footer = () => {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-desc-container">
                    <h3 className="footer-title">Agency</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Nesciunt beatae et blanditiis, doloribus aut temporibus minus
                        inventore facere atque eius repellendus provident qui consequatur
                        perspiciatis est unde molestiae exercitationem quod!</p>
                </div>

                <div className="footer-links-container">
                    <div className="footer-links-container-list">
                        <p className="footer-title">Links</p>
                        <ul>
                            <li>
                                <a href="#">Base de conhecimentos</a>
                            </li>
                            <li>
                                <a href="#">Trabalhe conosco</a>
                            </li>
                            <li>
                                <a href="#">Ultimos projetos</a>
                            </li>
                            <li>
                                <a href="#">Politica de privacidade</a>
                            </li>
                            <li>
                                <a href="#">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-links-container-list">
                        <p className="footer-title">Links</p>
                        <ul>
                            <li>
                                <a href="#">Base de conhecimentos</a>
                            </li>
                            <li>
                                <a href="#">Trabalhe conosco</a>
                            </li>
                            <li>
                                <a href="#">Ultimos projetos</a>
                            </li>
                            <li>
                                <a href="#">Politica de privacidade</a>
                            </li>
                            <li>
                                <a href="#">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-links-container-list">
                        <p className="footer-title">Links</p>
                        <ul>
                            <li>
                                <a href="#">Base de conhecimentos</a>
                            </li>
                            <li>
                                <a href="#">Trabalhe conosco</a>
                            </li>
                            <li>
                                <a href="#">Ultimos projetos</a>
                            </li>
                            <li>
                                <a href="#">Politica de privacidade</a>
                            </li>
                            <li>
                                <a href="#">Contato</a>
                            </li>
                        </ul>
                    </div>


                </div>
                
                <div className="footer-copy-right-container">
                    <p><i className="footer-icon"><RiCopyrightLine /></i> 2021 Agency</p>
                    <p>A melhor agência para seus projetos</p>
                </div>

            </div>

        </footer>
    )
}
export default Footer;