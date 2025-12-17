import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutimg from '../assets/img/about.jpg';
import Button from "react-bootstrap/Button";
import cat1 from '../assets/img/cat-1.jpg';
import cat2 from '../assets/img/cat-2.jpg';
import cat3 from '../assets/img/cat-3.jpg';
import cat4 from '../assets/img/cat-4.jpg';
import './Categoriessection.css';

export default function Categories() {
    return (
        <Container className='my-5 py-4 categories'>
            <Row className='mb-5'>
                <Col className='text-center'>
                    <h6 style={{color: '#06BBCC', fontWeight: '700'}}>CATEGORIES</h6>
                    <h1 className=''>Courses Categories</h1>
                </Col>
            </Row>

            <Row className="g-3">
                <Col lg={7} md={6} sm={12}>
                    <Row className="g-3">
                        <Col xs={12} className='position-relative categoriesmain'>
                            <img src={cat1} alt="category1" className="img-fluid w-100" />
                            <div className='bg-white text-center position-absolute bottom-0 end-0 py-3 px-3' style={{ margin: '1px' }}>
                                <h5 className='mb-0'>Web Design</h5>
                                <small style={{ color: '#06BBCC' }}>49 Courses</small>
                            </div>
                        </Col>

                        <Col lg={6} md={12} className='position-relative categoriesmain'>
                            <img src={cat2} alt="category2" className="img-fluid w-100" />
                            <div className='bg-white text-center position-absolute bottom-0 end-0 py-3 px-3' style={{ margin: '1px' }}>
                                <h5 className='mb-0'>Graphic Design</h5>
                                <small style={{ color: '#06BBCC' }}>49 Courses</small>
                            </div>
                        </Col>

                        <Col lg={6} md={12} className='position-relative categoriesmain'>
                            <img src={cat3} alt="category3" className="img-fluid w-100" />
                            <div className='bg-white text-center position-absolute bottom-0 end-0 py-3 px-3' style={{ margin: '1px' }}>
                                <h5 className='mb-0'>Video Editing</h5>
                                <small style={{ color: '#06BBCC' }}>49 Courses</small>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col lg={5} md={6} sm={12} className='position-relative categoriesmain'>
                    <img src={cat4} alt="category4" className="img-fluid w-100 h-100" />
                    <div className='bg-white text-center position-absolute bottom-0 end-0 py-3 px-3' style={{ margin: '1px' }}>
                        <h5 className='mb-0'>Online Marketing</h5>
                        <small style={{ color: '#06BBCC' }}>49 Courses</small>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
