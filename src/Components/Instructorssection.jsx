import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import team1 from '../assets/img/team-1.jpg';
import team2 from '../assets/img/team-2.jpg';
import team3 from '../assets/img/team-3.jpg';
import team4 from '../assets/img/team-4.jpg';
import './Instructorssection.css';

export default function Instructors() {
    return (
        <Container className='my-5 py-4 courses' data-aos="fade-up"
        >
            <Row className='mb-5'>
                <Col className='text-center'>
                    <h6 style={{ color: '#06BBCC', fontWeight: '700' }} data-aos="fade-up"
                        data-aos-delay="700"
                    >INSTRUCTORS</h6>
                    <h1 className='' data-aos="fade-right"
                        data-aos-delay="800"
                    >Expert Instructors</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={6} sm={12} xs={12} className='instructormain text-center position-relative py-lg-0 py-3' data-aos="fade-up"
data-aos-delay="850"
>
                    <div className='instructorimg'>
                        <img src={team1} alt='team1' className='img-fluid w-100'></img>
                    </div>
                    <div className='instructoricons position-absolute bottom-10 start-50 translate-middle d-flex gap-2 p-2'>
                        <i class="fa-brands fa-facebook-f d-flex justify-content-center align-items-center" style={{ padding: '0px 10px 0px 10px' }}></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div className='instructorsdetails p-4'>
                        <h5 className='mt-3' style={{ color: '#181d38', fontWeight: '700' }}>Instructor Name</h5>
                        <small style={{ color: '#52565B' }}>Designation</small>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} className='instructormain text-center position-relative py-lg-0 py-3' data-aos="fade-up"
data-aos-delay="900"
>
                    <div className='instructorimg'>
                        <img src={team2} alt='team2' className='img-fluid w-100'></img>
                    </div>
                    <div className='instructoricons position-absolute bottom-10 start-50 translate-middle d-flex gap-2 p-2'>
                        <i class="fa-brands fa-facebook-f d-flex justify-content-center align-items-center" style={{ padding: '0px 10px 0px 10px' }}></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div className='instructorsdetails p-4'>
                        <h5 className='mt-3' style={{ color: '#181d38', fontWeight: '700' }}>Instructor Name</h5>
                        <small style={{ color: '#52565B' }}>Designation</small>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} className='instructormain text-center position-relative py-lg-0 py-3' data-aos="fade-up"
data-aos-delay="950"
>
                    <div className='instructorimg'>
                        <img src={team3} alt='team3' className='img-fluid w-100'></img>
                    </div>
                    <div className='instructoricons position-absolute bottom-10 start-50 translate-middle d-flex gap-2 p-2'>
                        <i class="fa-brands fa-facebook-f d-flex justify-content-center align-items-center" style={{ padding: '0px 10px 0px 10px' }}></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div className='instructorsdetails p-4'>
                        <h5 className='mt-3' style={{ color: '#181d38', fontWeight: '700' }}>Instructor Name</h5>
                        <small style={{ color: '#52565B' }}>Designation</small>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} className='instructormain text-center position-relative py-lg-0 py-3' data-aos="fade-up"
data-aos-delay="1000"
>
                    <div className='instructorimg'>
                        <img src={team4} alt='team4' className='img-fluid w-100'></img>
                    </div>
                    <div className='instructoricons position-absolute bottom-10 start-50 translate-middle d-flex gap-2 p-2'>
                        <i class="fa-brands fa-facebook-f d-flex justify-content-center align-items-center" style={{ padding: '0px 10px 0px 10px' }}></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div className='instructorsdetails p-4'>
                        <h5 className='mt-3' style={{ color: '#181d38', fontWeight: '700' }}>Instructor Name</h5>
                        <small style={{ color: '#52565B' }}>Designation</small>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
