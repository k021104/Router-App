import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutimg from '../assets/img/about.jpg';
import Button from "react-bootstrap/Button";
import Categoriessection from '../Components/Categoriessection';
import Coursessection from '../Components/Coursessection';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

import './bannerstyle.css';


export default function Courses() {
    return (
        <>
            <div className="page-banner">
                <div className="banner-content" data-aos="zoom-in"
                    data-aos-duration="800">
                    <h1>Courses</h1>
                    <Breadcrumb className="breadcrumb-center">
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="home-breadcrumb">
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Courses</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <Categoriessection />
            <Coursessection />

        </>
    )
}
