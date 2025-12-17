import React from 'react'
import Hero from '../Components/Herosection'
import Aboutsection from '../Components/Aboutsection'
import Servicessection from '../Components/Servicessection'
import Categories from '../Components/Categoriessection'
import Courses from '../Components/Coursessection'
import Instructors from '../Components/Instructorssection'
import Testimonial from '../Components/Testimonialsection'

export default function Home() {
    return (
        <>
            <Hero />
            <Servicessection />
            <Aboutsection />
            <Categories />
            <Courses />
            <Instructors />
            <Testimonial />
        </>
    )
}
