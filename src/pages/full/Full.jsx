import React from 'react'
import NavBar from 'components/NavBar';
import { NavLink, Outlet } from 'react-router-dom';

const Full = () => {
    <div>
        <NavBar/>
        <Outlet />
    </div>
}

export default Full;