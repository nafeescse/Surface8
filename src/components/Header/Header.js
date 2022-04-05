import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className='m-4'>

            <NavLink  className='mr-3 text-lg active' to="/">Home</NavLink>

            <NavLink  className='mr-3 text-lg active' to="/reviews" >Reviews</NavLink>

            <NavLink className='mr-3 active text-lg'  to="/dashboard" >Dashboard</NavLink>

            <NavLink  className='active mr-3 text-lg' to="/blogs">Blogs</NavLink>

            <NavLink className='active mr-3 text-lg' to="/gallery">Gallery</NavLink>
        </div>
    );
};

export default Header;