import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

function Navigation() {
    const { user, logout } = useAuth();

    return (
        <Navbar expand='md'>
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="nav-links">
                        {user && (
                            <Nav.Link>
                                <strong>
                                    <p className="mb-2">Welcome, {user.email}</p>
                                </strong>
                            </Nav.Link>
                        )}
                        <Nav.Link as={Link} to="/home">Home </Nav.Link>
                        <Nav.Link as={Link} to="/test">About </Nav.Link>
                        <Nav.Link as={Link} to="/home">Contact </Nav.Link>
                        {user ? (
                        <div>
                            <Button className="light-button" onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <div className="auth-buttons">
                            <Link to="/signup"><Button className="dark-button">Sign Up</Button></Link>
                            <Link to="/login"><Button className="light-button">Log In</Button></Link>
                        </div>)
                    }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;