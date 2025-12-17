import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import testimonial1 from '../assets/img/testimonial-1.jpg';
import testimonial2 from '../assets/img/testimonial-2.jpg';
import testimonial3 from '../assets/img/testimonial-3.jpg';
import testimonial4 from '../assets/img/testimonial-4.jpg';
import './Testimonial.css';

export default function Testimonial() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 992, // tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 576, // mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <>
            <Container className='my-5 py-4 testimonial'>
                <Row className=''>
                    <Col className='text-center'>
                        <h6 style={{ color: '#06BBCC', fontWeight: '700' }}>TESTIMONIAL</h6>
                        <h1 className=''>Our Students Say!</h1>
                    </Col>
                </Row>
                <Row>
                    <Slider {...settings}>
                        <div className='testimonialcard text-center'>
                            <img src={testimonial1} alt='testimonial-1' className="border rounded-circle p-2 mx-auto mb-3" style={{ width: '80px', height: '80px' }} />

                            <h5 style={{ color: '#181d38' }}>Client Name</h5>
                            <p style={{ color: '#6c757d' }}>Profession</p>
                            <p className='clientmessage p-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className='testimonialcard text-center'>
                            <img src={testimonial2} alt='testimonial-2' className="border rounded-circle p-2 mx-auto mb-3" style={{ width: '80px', height: '80px' }} />

                            <h5 style={{ color: '#181d38' }}>Client Name</h5>
                            <p style={{ color: '#6c757d' }}>Profession</p>
                            <p className='clientmessage p-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className='testimonialcard text-center'>
                            <img src={testimonial3} alt='testimonial-3' className="border rounded-circle p-2 mx-auto mb-3" style={{ width: '80px', height: '80px' }} />

                            <h5 style={{ color: '#181d38' }}>Client Name</h5>
                            <p style={{ color: '#6c757d' }}>Profession</p>
                            <p className='clientmessage p-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className='testimonialcard text-center'>
                            <img src={testimonial4} alt='testimonial-4' className="border rounded-circle p-2 mx-auto mb-3" style={{ width: '80px', height: '80px' }} />

                            <h5 style={{ color: '#181d38' }}>Client Name</h5>
                            <p style={{ color: '#6c757d' }}>Profession</p>
                            <p className='clientmessage p-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </Slider>
                </Row>
            </Container>
        </>
    )
}
