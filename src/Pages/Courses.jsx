import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutimg from '../assets/img/about.jpg';
import Button from "react-bootstrap/Button";
import Aboutsection from '../Components/Aboutsection';
import Servicessection from '../Components/Servicessection';
import Instructors from './Instructors';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

import './Courses.css';


export default function Courses() {
    return (
        <>
            <div className="page-banner">
                <div className="banner-content">
                    <h1>About Us</h1>
                    <Breadcrumb className="breadcrumb-center">
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="home-breadcrumb">
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>About</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <Servicessection />
            <Aboutsection />
            <Instructors />

        </>
    )
}
