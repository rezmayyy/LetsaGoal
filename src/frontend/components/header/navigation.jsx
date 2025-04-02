import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar expand='md'>
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="nav-links me-auto">
                        <Nav.Link as={Link} to="/home">Home </Nav.Link>
                        <Nav.Link as={Link} to="/home">About </Nav.Link>
                        <Nav.Link as={Link} to="/home">Contact </Nav.Link>
                    </Nav>
                    <div className="auth-buttons">
                        <Link to="/signup">
                            <Button className="dark-button">Sign Up</Button>
                        </Link>
                        <Button className="light-button">Log In</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;