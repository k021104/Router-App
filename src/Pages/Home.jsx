import React from 'react'
import Hero from './Hero'
import Aboutsection from '../Components/Aboutsection'
import Servicessection from '../Components/Servicessection'
import Categories from '../Components/Categoriessection'
import Courses from './Courses'
import Instructors from './Instructors'
import Testimonial from './Testimonial'

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
