import { Container, Row, Col, Card, Nav, Navbar, Alert, Button, Form } from 'react-bootstrap';
import '../../styles/testPage.css';

function TestPage() {
    return (
        <Container className="container-sm my-5 p-5 bg-info rounded shadow">
            <h1>Hello, Parent Container!</h1>
            <Row className="bg-primary">
                <h1>Hello, Row!</h1>
                <Col className="bg-secondary">
                    <h1>Hello, Col 1!</h1>
                </Col>
                <Col className="bg-success">
                    <h1>Hello, Col 2!</h1>
                    <p>Content goes here for the content section</p>
                </Col>
            </Row>

            <Row className="d-flex justify-content-center">
                <Card className="mt-5" style={{width: "50%"}}>
                    <Card.Header>
                        <Card.Title>Hello, Title!</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>Hello, Text for the Card I am making!</Card.Text>
                        <Button variant="primary">Button</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        Hello, Footer!<br></br>
                        <div class="menu icon"></div>
                    </Card.Footer>
                </Card>
            </Row>
        </Container>
    )
}

export default TestPage;
