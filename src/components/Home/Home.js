import React, { useEffect, useState } from 'react';
import { Accordion, Card, Carousel, Col, Image, Row, Button, Badge, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import HomeService from './HomeService/HomeService';
import './Home.css';
import grapes from '../../images/black.jpg';
import grapesTwo from '../../images/blackgrapes.jpg';
import grapesThree from '../../images/green.jpg';


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('./grapes.JSON')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[]);
    const add = <FontAwesomeIcon icon={faPlus} />
    return (
        <div className="container">
        <div className="my-5">
        <Row>
            <Col sm>
            <h2 className="mt-5">Welcome to <span className="text-info">Grapes Heaven</span></h2>
            <p>We offer courses for growing grapes. As we all know grape is a popular fruit. But most of the people dont know how to grow it properly. So we are offering course so that you can learn how to grow grapes properly.
                <br /> <br />
                A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis.
                Grapes can be eaten fresh as table grapes, used for making wine, jam, grape juice, jelly, grape seed extract, vinegar, and grape seed oil, or dried as raisins, currants and sultanas. Grapes are a non-climacteric type of fruit, generally occurring in clusters.
            </p>
            </Col>
            <Col sm>
            <Image src="https://image.freepik.com/free-photo/grape-farmers-are-happy-sell-online-market-grapes_1150-5792.jpg" fluid />
            </Col>
        </Row>
        </div>

        <div className="my-5">
            <h2 className="text-info mb-5">Our Offering Courses</h2>
        <Row>
            <Col sm>
            <Card>
                <Card.Header>4 Month Course</Card.Header>
                <Card.Body>
                    <Card.Title>Course Fee : ৳ 15000</Card.Title>
                    <Card.Text>
                    Grow grapes in your garden after completing this course.
                    </Card.Text>
                    <Button variant="success">{add} Enroll Now</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card>
                <Card.Header>6 Month Course</Card.Header>
                <Card.Body>
                    <Card.Title>Course Fee : ৳ 20000 <Badge bg="secondary">New</Badge></Card.Title>
                    <Card.Text> 
                    Grow grapes in your garden after completing this course.
                    </Card.Text>
                    <Button variant="success">{add} Enroll Now</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card>
                <Card.Header>1 Year Course</Card.Header>
                <Card.Body>
                    <Card.Title>Course Fee : ৳ 25000</Card.Title>
                    <Card.Text>
                    Grow grapes in your garden after completing this course.
                    </Card.Text>
                    <Button variant="success">{add} Enroll Now</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="my-4">
            <Col sm>
            <Card>
                <Card.Header>2 Month Crash Course</Card.Header>
                <Card.Body>
                    <Card.Title>Course Fee : ৳ 5000</Card.Title>
                    <Card.Text>
                    Learn few tips and tricks
                    </Card.Text>
                    <Button variant="success">{add} Enroll Now</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card>
                <Card.Header>How to prepare soil</Card.Header>
                <Card.Body>
                    <Card.Title>Course Fee : ৳ 2000 <Badge bg="secondary">New</Badge></Card.Title>
                    <Card.Text> 
                    Learn how to preapare your soil.
                    </Card.Text>
                    <Button variant="success">{add} Enroll Now</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card>
                <Card.Header>2 Year Course</Card.Header>
                <Card.Body>
                    <Card.Title>Course Fee : ৳ 45000</Card.Title>
                    <Card.Text>
                   Learn everything we have to over.
                    </Card.Text>
                    <Button variant="success">{add} Enroll Now</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </div>

        <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={grapes}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>One of Our Clients Garden</h3>
            <p>Fully Organic Grapes</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src={grapesTwo}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Your Satifaction is our first Priority</h3>
            <p>The sweetest grapes.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={grapesThree}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Fresh and Juicy</h3>
            <p>Every bite is a satisfaction.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel> 

        <div className="my-5 py-5">
            <Row> 
            <Col className="my-auto">
            <h2 className="text-info mb-3">Top Trending grapes Now</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Top Variant</th>
                    <th>Color</th>
                    <th>Origin</th>
                    <th>Taste</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Moon Drops</td>
                    <td>Black</td>
                    <td>Usa</td>
                    <td>Sweet</td>
                    </tr>
                    <tr>
                    <td>Pinot Noir</td>
                    <td>Red-black</td>
                    <td>New Zeland</td>
                    <td>Sweet</td>
                    </tr>
                    <tr>
                    <td>Kyoho</td>
                    <td>Red</td>
                    <td>Japan</td>
                    <td>Sweet</td>
                    </tr>
                </tbody>
                </Table>
            </Col>
            <Col>
                <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                What are benefits of eating grapes?</Accordion.Header>
                    <Accordion.Body>
                    Grapes contain many important vitamins and minerals, including more than one-quarter of the RDIs for vitamins C and K. Grapes are high in antioxidants, beneficial plant compounds that may protect against chronic health conditions, such as diabetes, cancer and heart disease. Grapes contain many beneficial plant compounds, such as resveratrol, that may protect against various types of cancer, including colon cancer and breast cancer.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why Chose us?</Accordion.Header>
                    <Accordion.Body>
                    Beacause we are the absolutely best in this sector. We have 15 years of experience for how to grow sweet graps. If you take our course you will grow grapes today or tommorow.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </Col>
            </Row>
        </div>
<br />
<h2 className="text-center text-info">Few of our services.</h2>
            <Row xs={1} md={2} className="g-4 my-4">
                
                {
                    services.slice(0, 4).map(grapes => <HomeService key={grapes.key} grapes={grapes}></HomeService>)
                }
                
            </Row>
            
        </div>
    );
};

export default Home;