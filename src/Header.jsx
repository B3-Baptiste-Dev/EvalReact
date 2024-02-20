import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Accueil</Link> | <Link to="/add-book">Ajouter un livre</Link>
            </nav>
        </header>
    );
}

export default Header;
