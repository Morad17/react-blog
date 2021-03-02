import React from 'react'
import './style.css'
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="header-nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Contact Me</a></li>
            </ul>
            <ul>
                <li><div className="">
                Socials
            </div></li>
            </ul>
            
        </nav>
    </header>
   )

 }

export default Header