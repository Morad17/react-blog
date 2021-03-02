import React from 'react'
import './style.css'
/**
* @author
* @function Navbar
**/

const Navbar = () => {
 return (
    <div className="navbar">
        <ul className="navigation">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Post</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
        <div className="">
            <input />
            <img src={('../../assets/icons/search.png')}alt="search" />
        </div>
   </div>
 )
}

export default Navbar