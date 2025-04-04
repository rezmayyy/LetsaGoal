import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../../logo.svg';
import image2 from '../../assets/image2.png';

function LandingPage() {
    return (
        <Container className="container-md rounded" style={{ maxWidth: "90%" }}>
            <Row className="d-flex justify-content-center" style={{ columnGap: "50px" }}>

                {/* Quadrant 1 */}
                <Col s={12} md={5} className="p-5 my-5 shadow" style={{ borderRadius: "100px", backgroundColor: "rgb(250, 200, 0)", zIndex: 1}}>
                    <Card className="mt-3 mx-3 p-4 shadow-lg" style={{ borderRadius: "100px", backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
                        <Card.Title className="fs-1 p-2">
                            <span>Get Goals Going <br />With</span>
                            <span style={{ color: "rgb(250, 200, 0)" }}> Greatness</span>
                        </Card.Title>
                        <Card.Body className="text-muted">
                            <Card.Text>Set goals and get goals done. Start planning your goals now</Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: "transparent" }}>
                            <Link to="signup"><Button className="dark-button">Get Started</Button></Link>
                        </Card.Footer>
                    </Card>
                </Col>

                {/* Quadrant 2 */}
                <Col s={12} md={6} className="p-5 m-0" style={{ borderRadius: "100px", backgroundColor: "rgba(250, 200, 0, 0.5)" }}>
                    <Card.Title className="text-start">
                        <h3>Achieve, Monitor, and Track<br/>your goals in your personalized dashboard:</h3>
                    </Card.Title>

                    <Card className="" style={{ borderRadius: "100px", border: "none", marginLeft: "-10rem" }}>
                        <Card.Body>
                            <img src={image1} style={{ width: "75%", height: "auto" }} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                {/* Quadrant 3 */}
                <Col s={12} md={8} className=" mb-5" style={{ backgroundColor: "rgb(50, 50, 50)", borderRadius: "100px" }}>
                    <Card className="p-3" style={{ border: "none", backgroundColor: "transparent" }}>
                        <Card.Body className="d-flex justify-content-between">
                            <Card.Text className="text-start align-self-center" style={{ color: "white" }}>
                                Create and set goals and view all your goals in one place. Plan daily, weekly
                                monthly, and yearly goals for yourself and hold yourself accountable to achieve them.
                            </Card.Text>
                            <img src={image2} />
                        </Card.Body>
                    </Card>
                </Col>

                {/* Quadrant 4 */}
                <Col s={12} md={4} className="d-flex justify-content-end mt-5">
                    <div className="align-self-end">
                        <Card.Title className="text-muted">Developed By:</Card.Title>
                        <h1>Austin Mann</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingPage;