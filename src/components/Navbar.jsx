import React from 'react';
import logo from './logo.png'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className='flex'>

            <img src={logo} alt="" />

            <div className="links">
                <Link to="/Register">Register</Link> 
                ㅤㅤ
                <Link to="/About">About</Link>
            </div>

        </header>
    )
}


export default Navbar