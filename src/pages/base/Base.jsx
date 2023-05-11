import React from 'react'
import NavBarSmall from 'components/NavBarSmall';
import { NavLink, Outlet } from 'react-router-dom';

const Base = () => {
  <div>
    <NavBarSmall/>
    <Outlet/>
  </div>
}

export default Base