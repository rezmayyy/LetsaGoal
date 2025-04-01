import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar expand='sm'>
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="nav-links me-auto">
                        <Nav.Link as={Link} to="/">Home </Nav.Link>
                        <Nav.Link as={Link} to="/">About </Nav.Link>
                        <Nav.Link as={Link} to="/">Contact </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;