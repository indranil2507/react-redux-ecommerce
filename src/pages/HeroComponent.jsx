import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const HeroComponent = () => {
    return (
        <div>
            <Navbar/>
            <Link to="/buynow" >Click me</Link>
            <Footer/>
        </div>
    )
}

export default HeroComponent
