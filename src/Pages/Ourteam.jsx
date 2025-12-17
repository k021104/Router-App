import React from 'react'
import Instructorssection from '../Components/Instructorssection';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

import './bannerstyle.css';


export default function Ourteam() {
    return (
        <>
            <div className="page-banner">
                <div className="banner-content" data-aos="zoom-in"
                    data-aos-duration="800">
                    <h1>Our Team</h1>
                    <Breadcrumb className="breadcrumb-center">
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="home-breadcrumb">
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Team</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <Instructorssection />

        </>
    )
}
