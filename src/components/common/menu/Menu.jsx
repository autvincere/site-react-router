//imr
import React from 'react'
import style from './Menu.module.css';
import logo from '../../../assets/react-chile-logo.png';

const Menu = (props) =>{

  return(
       
<nav className={`${style.navbarLine} navbar is-white` } role="navigation" aria-label="main navigation">
<div className={`navbar-brand ${style.menu} `}>
  <a className="navbar-item" href="https://bulma.io">
    <img src={logo} width="112" height="28" />
  </a>
  <a className="navbar-item is-active"><i className="ion ion-md-home"></i>Inicio</a>
  <a className="navbar-item"><i className="ion ion-md-text"></i>Ordenes</a>
  <a className="navbar-item"><i className="ion ion-md-list-box"></i>Servicios</a>
</div>
</nav>

  )   
}
export default Menu;

