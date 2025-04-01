import Navigation from './navigation';
import '../../../styles/header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo-and-name">Hello, Header!</div>
            <Navigation />
        </header>
    )
}

export default Header;