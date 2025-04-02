import Navigation from './navigation';
import { Link } from 'react-router-dom';
import '../../../styles/header.css';

function Header() {
    return (
        <header className="header">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="logo-and-name">Hello, Header!</div>
            </Link>
            <Navigation />
        </header>
    )
}

export default Header;