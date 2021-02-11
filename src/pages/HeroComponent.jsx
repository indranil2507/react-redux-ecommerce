import React from 'react'
import {Link} from 'react-router-dom'
import Background from '../components/Background'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './HeroComponent.css'

const HeroComponent = () => {
    return (
        <div>
            <Navbar/>
            <div className="main-section">
                <div className="background"><Background/></div>
                <div className="carousel"><Link to="/buynow" >Click me</Link></div>
                <div className="background"><Background></Background></div>
            </div>
            <div className="cards">
                <div className="card">
                    card -1
                </div>
                <div className="card">
                    card -2
                </div>
                <div className="card">
                    card -3
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default HeroComponent
