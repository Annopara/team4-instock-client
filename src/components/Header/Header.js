import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// import logo from '../../assets/logos/InStock-Logo_2x.png'
import smallLogo from '../../assets/logos/InStock-Logo_1x.png'
import '../Header/Header.scss'

export const Header = () => {
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <img src={smallLogo} className="header__logo--styling"/> 
      </Link>
      <div className="header__text">
        <NavLink activeClassName="active" className='link' to="/warehouses" >
            <h3 className="header__warehouse header__hover " >Warehouses</h3>
        </NavLink>
        <NavLink activeClassName="active" className='link' to="/inventory"> 
            <h3 className="header__inventory header__hover">Inventory</h3>
        </NavLink>
      </div >
    </div>
  )
  
}; 



