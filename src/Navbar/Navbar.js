import React from 'react';
import './Navbar.css';
const Nav=()=>{
    return(
        <nav className='nav'>
        <a href="https://www.docplanner.com/about-us" className='active'>About Us</a>
        <a href="https://www.docplanner.com/career">Career</a>  
        </nav>
    )    
}
const Navbar=()=>{
    return(
        <div className='navbar'>            
            <img src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1'/>
            <Nav/>
        </div>

    )
}
export default Navbar;