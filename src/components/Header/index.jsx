import { FaBrain, FaBars } from 'react-icons/fa';
import '../css/styles.css';

const Header = () =>{

    return(
        <header className="main-banner">
            <div className="nav-container">
                <a href="#" className="brand">
                    <i><FaBrain /></i>Agency
                </a>
                <nav>
                    <ul className="nav-container-navbar">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Serviços</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                        <li>
                            <a href="#" className="btn btn-primary">Entrar</a>
                        </li>
                        <li>
                            <a href="#" className="btn">Registrar</a>
                        </li>
                    </ul>
                    
                </nav>
                <i className="fas"><FaBars /></i>
            </div>
            <div className="title-container">
                <h2>Nós desenvolvemos</h2>
                <h1>Poderosas Experiências</h1>
                <a href="#" className="btn btn-primary btn-rounded">Fazer Orçamento</a>
            </div>
        </header>
    )
}
export default Header;