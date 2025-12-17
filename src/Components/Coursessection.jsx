import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import course1 from '../assets/img/course-1.jpg';
import course2 from '../assets/img/course-2.jpg';
import course3 from '../assets/img/course-3.jpg';
import './Courses.css';
import { Button } from 'react-bootstrap';

export default function Courses() {
    return (
        <Container className='my-5 py-4 courses'>
            <Row className='mb-5'>
                <Col className='text-center'>
                    <h6 style={{ color: '#06BBCC', fontWeight: '700' }}>COURSES</h6>
                    <h1 className=''>Popular Courses</h1>
                </Col>
            </Row>

            <Row>
                <Col lg={4} md={12} sm={12} xs={12} className='text-center position-relative coursesmain'>
                    <div className='courseimg'>
                        <img src={course1} alt='course-1' className='img-fluid w-100'></img>
                    </div>
                    <div className='coursebuttons position-absolute top-50 start-50 translate-middle d-flex'>
                        <Button variant="info text-white readmorebtn">Read More</Button>
                        <Button variant="info text-white joinnowbtn">Join Now</Button>
                    </div>
                    <div className='courseimg-details'>
                        <h3 className='mb-2'>$149.00</h3>
                        <div className='d-flex staricons justify-content-center mb-3'>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small>(123)</small>
                        </div>
                        <h5 className='px-4'>Web Design & Development Course for Beginners</h5>
                        <div className="d-flex border-top px-0 text-center">
                            <small className="flex-fill border-end py-2">
                                <i className="fa-solid fa-user me-1"></i>
                                John Doe
                            </small>

                            <small className="flex-fill border-end py-2">
                                <i className="fa-solid fa-clock me-1"></i>
                                1.49 Hrs
                            </small>

                            <small className="flex-fill py-2">
                                <i className="fa-solid fa-users me-1"></i>
                                30 Students
                            </small>
                        </div>

                    </div>
                </Col>
                <Col lg={4} md={12} sm={12} xs={12} className='text-center position-relative coursesmain'>
                    <div className='courseimg'>
                        <img src={course2} alt='course-2' className='img-fluid w-100'></img>
                    </div>
                    <div className='coursebuttons position-absolute top-50 start-50 translate-middle d-flex'>
                        <Button variant="info text-white readmorebtn">Read More</Button>
                        <Button variant="info text-white joinnowbtn">Join Now</Button>
                    </div>
                    <div className='courseimg-details'>
                        <h3 className='mb-2'>$149.00</h3>
                        <div className='d-flex staricons justify-content-center mb-3'>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small>(123)</small>
                        </div>
                        <h5 className='px-4'>Web Design & Development Course for Beginners</h5>
                        <div className="d-flex border-top px-0 text-center">
                            <small className="flex-fill border-end py-2">
                                <i className="fa-solid fa-user me-1"></i>
                                John Doe
                            </small>

                            <small className="flex-fill border-end py-2">
                                <i className="fa-solid fa-clock me-1"></i>
                                1.49 Hrs
                            </small>

                            <small className="flex-fill py-2">
                                <i className="fa-solid fa-users me-1"></i>
                                30 Students
                            </small>
                        </div>

                    </div>
                </Col>
                <Col lg={4} md={12} sm={12} xs={12} className='text-center position-relative coursesmain'>
                    <div className='courseimg'>
                        <img src={course3} alt='course-3' className='img-fluid w-100'></img>
                    </div>
                    <div className='coursebuttons position-absolute top-50 start-50 translate-middle d-flex'>
                        <Button variant="info text-white readmorebtn">Read More</Button>
                        <Button variant="info text-white joinnowbtn">Join Now</Button>
                    </div>
                    <div className='courseimg-details'>
                        <h3 className='mb-2'>$149.00</h3>
                        <div className='d-flex staricons justify-content-center mb-3'>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small>(123)</small>
                        </div>
                        <h5 className='px-4'>Web Design & Development Course for Beginners</h5>
                        <div className="d-flex border-top px-0 text-center">
                            <small className="flex-fill border-end py-2">
                                <i className="fa-solid fa-user me-1"></i>
                                John Doe
                            </small>

                            <small className="flex-fill border-end py-2">
                                <i className="fa-solid fa-clock me-1"></i>
                                1.49 Hrs
                            </small>

                            <small className="flex-fill py-2">
                                <i className="fa-solid fa-users me-1"></i>
                                30 Students
                            </small>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}
