import React from 'react'
import './Navbar.css'
import {FaBars} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Navbar = ({toggle}) => {
    return (
        <>
        <div className="nav">
            <div className="nav-logo">
                <AiOutlineShoppingCart/>{" "}Yatra
            </div>
           
           
            <div className="nav-buttons">
                <button>Buy-Now</button>
                
            </div>

        </div>
            
        </>
    )
}
export default Navbar