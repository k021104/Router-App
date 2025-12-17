import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Service.css';

export default function Services() {
    return (
        <Container className='my-5 py-4'>
            <Row>
                <Col lg={3} md={6} sm={12} xs={12} className='mx-auto text-center'>
                    <div className='service-card my-3 py-4 px-4'>
                        <i className="fa-solid fa-graduation-cap mb-3"></i>
                        <h5 className='py-2'>Skilled Instructors</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} className='mx-auto text-center'>
                    <div className='service-card my-3 py-4 px-4'>
                        <i class="fa-solid fa-globe mb-3"></i>
                        <h5 className='py-2'>Online Classes</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} className='mx-auto text-center'>
                    <div className='service-card my-3 py-4 px-4'>
                       <i class="fa-solid fa-house-chimney mb-3"></i>
                        <h5 className='py-2'>Home Projects</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} className='mx-auto text-center'>
                    <div className='service-card my-3 py-4 px-4'>
                        <i class="fa-solid fa-book-open mb-3"></i>
                        <h5 className='py-2'>Book Library</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
