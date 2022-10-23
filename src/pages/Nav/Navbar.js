import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/contract'>Contract</NavLink>

    </nav>
};

export default Navbar;