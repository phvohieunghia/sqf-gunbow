import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import './style.scss'

const Sidebar = () => {
  let location = useLocation()
  return (
    <div className="sidebar">
      <div className="img">
        <img src={require('assets/img/logo.png')} alt="error png" />
      </div>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/egg-baskets">Egg baskets</NavLink>
      <NavLink to="/my-assets">My Assets</NavLink>
      <NavLink to="/marketplace">Marketplace</NavLink>
      <NavLink to="/staking">Staking</NavLink>
      <NavLink to="/vesting">Vesting</NavLink>
    </div>
  )
}

export default Sidebar
