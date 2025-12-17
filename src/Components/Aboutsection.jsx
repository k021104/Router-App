import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutimg from '../assets/img/about.jpg';
import Button from "react-bootstrap/Button";
import './Aboutussection.css';

export default function Services() {
    return (
        <Container className='my-5 aboutus'>
            <Row>
                <Col lg={6} md={12} sm={12} xs={12}>
                    <img src={aboutimg} className='img-fluid w-100'></img>
                </Col>
                <Col lg={6} md={12} sm={12} xs={12} className='d-flex flex-column justify-content-center my-lg-0 my-3'>
                    <h6>ABOUT US</h6>
                    <h1 className='py-3'>Welcome to eLEARNING</h1>
                    <p className='mb-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <p className='mb-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

                    <Row>
                        <Col md={6} sm={12} xs={12}>
                            <p>
                                <i className="fa-solid fa-arrow-right pe-2"></i>
                                Skilled Instructors
                            </p>
                        </Col>
                        <Col md={6} sm={12} xs={12}>
                            <p>
                                <i className="fa-solid fa-arrow-right pe-2"></i>
                                Online Classes
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6} sm={12} xs={12}>
                            <p>
                                <i className="fa-solid fa-arrow-right pe-2"></i>
                                International Certificate
                            </p>
                        </Col>
                        <Col md={6} sm={12} xs={12}>
                            <p>
                                <i className="fa-solid fa-arrow-right pe-2"></i>
                                Skilled Instructors
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6} sm={12} xs={12}>
                            <p>
                                <i className="fa-solid fa-arrow-right pe-2"></i>
                                Online Classes
                            </p>
                        </Col>
                        <Col md={6} sm={12} xs={12}>
                            <p>
                                <i className="fa-solid fa-arrow-right pe-2"></i>
                                International Certificate
                            </p>
                        </Col>
                    </Row>
                    <Button className="btnhero mt-4">Read More</Button>
                </Col>
            </Row>
        </Container>
    )
}
