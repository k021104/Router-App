import React from 'react';
import Testimonialsection from '../Components/Testimonialsection';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './bannerstyle.css';
import './Contact.css';

export default function Contact() {
    return (
        <>
            <div className="page-banner">
                <div className="banner-content" data-aos="zoom-in"
                    data-aos-duration="800"
                >
                    <h1>Contact</h1>
                    <Breadcrumb className="breadcrumb-center">
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="home-breadcrumb">
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Contact</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <Container className='my-5 py-4 contact'>
                <Row className='mb-5'>
                    <Col className='text-center' data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h6 style={{ color: '#06BBCC', fontWeight: '700' }}>CONTACT US</h6>
                        <h1>Contact For Any Query</h1>
                    </Col>
                </Row>

                <Row className="g-3">
                    <Col lg={4} md={12} sm={12} data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <h5 style={{ fontWeight: '700', color: '#181d38' }}>Get In Touch</h5>
                        <p style={{ color: '#6c757d' }}>
                            The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.
                        </p>

                        <div className='contact-item d-flex align-items-start mb-3'>
                            <div className='icon-box d-flex align-items-center justify-content-center'>
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className='ms-3'>
                                <h5>Office</h5>
                                <p>123 Street, New York, USA</p>
                            </div>
                        </div>

                        <div className='contact-item d-flex align-items-start mb-3'>
                            <div className='icon-box d-flex align-items-center justify-content-center'>
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className='ms-3'>
                                <h5>Phone</h5>
                                <p>+1 234 567 890</p>
                            </div>
                        </div>

                        <div className='contact-item d-flex align-items-start mb-3'>
                            <div className='icon-box d-flex align-items-center justify-content-center'>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className='ms-3'>
                                <h5>Email</h5>
                                <p>info@example.com</p>
                            </div>
                        </div>

                    </Col>

                    <Col lg={4} md={12} sm={12} data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <iframe class="position-relative rounded w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" style={{ minHeight: '376px', border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </Col>
                    <Col lg={4} md={12} sm={12} data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        <form>
                            <Row className="mb-3">
                                <Col>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </Col>
                                <Col>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                    />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <textarea
                                        className="form-control"
                                        rows="6"
                                        placeholder="Message"
                                    ></textarea>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <button
                                        type="submit"
                                        className="btn btn-info text-white w-100"
                                    >
                                        Send Message
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
