import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import './style.css'
/**
* @author
* @function Navbar
**/

const Navbar = (props)=> {

    const [search, setSearch] = useState(false)

    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searched');
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ?'searchInput active': 'searchInput';
 return (
    <div className="navbar">
        <ul className="navigation">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/post">Post</NavLink></li>
            <li><NavLink to="/contact">Contacts</NavLink></li>
        </ul>
        <div className="search-row">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search"/>
                <i onClick={openSearch} className="fas fa-search"></i>
            </form>
        </div>
   </div>
 )
}

export default Navbar