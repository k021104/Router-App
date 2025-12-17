import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../assets/img/carousel-1.jpg';
import slider2 from '../assets/img/carousel-2.jpg';
import Button from "react-bootstrap/Button";
import './Herosection.css';

function Hero() {
    return (
        <Carousel indicators={false} className='hero-carousel'>
            <Carousel.Item className='hero-item'>
                <img src={slider1} className='hero-img w-100' alt="" />
                <div className="hero-overlay"></div>

                <div className='hero-content container d-flex align-items-center' data-aos="fade-up" data-aos-once="false">
                    <div className='col-lg-7 col-md-9 col-12 text-white text-start'>
                        <h5 className='hero-subtitle fw-bold mb-3' data-aos="fade-down"
>
                            BEST ONLINE COURSES
                        </h5>

                        <h1 className='hero-title fw-bold mb-4' data-aos="fade-right" data-aos-delay="100">
                            The Best Online <br /> Learning Platform
                        </h1>

                        <p className='hero-text mb-4' data-aos="fade-up" data-aos-delay="200">
                            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
                            Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus.
                        </p>

                        <div className='hero-buttons d-flex gap-3'>
                            <Button className="btnhero" data-aos="fade-right" data-aos-delay="300">Read More</Button>
                            <Button className="btnhero bg-white text-black" data-aos="fade-left" data-aos-delay="300">Join Now</Button>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className='hero-item'>
                <img src={slider2} className='hero-img w-100' alt="" />
                <div className="hero-overlay"></div>

                <div className='hero-content container d-flex align-items-center'>
                    <div className='col-lg-7 col-md-9 col-12 text-white text-start'>
                        <h5 className='hero-subtitle fw-bold mb-3' data-aos="fade-down">
                            BEST ONLINE COURSES
                        </h5>

                        <h1 className='hero-title fw-bold mb-4' data-aos="fade-right" data-aos-delay="100">
                            Get Educated Online <br /> From Your Home
                        </h1>

                        <p className='hero-text mb-4' data-aos="fade-up" data-aos-delay="200">
                            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
                            Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus.
                        </p>

                        <div className='hero-buttons d-flex gap-3'>
                            <Button className="btnhero" data-aos="fade-right" data-aos-delay="300">Read More</Button>
                            <Button className="btnhero bg-white text-black" data-aos="fade-left" data-aos-delay="300">Join Now</Button>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Hero;
