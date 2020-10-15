import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import './header.css';


const Header = (props) => {
 
return <header className="header">
        <img
            src={logo}
            alt="Logo Space X"
            className="logo"
          />
        <nav className="main-nav nav">
          <ul className="list">
            {props.rockets.map((item, index)=>(
              <li key={index} className="item">
                <NavLink to={'/'+ props.rocket} onClick={ () => {
                              props.changeRocket(item);
                            }} 
                            className="item-link" activeClassName='item-link-active'>{item}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="secondary-nav">
          <ul className="list">
            <li className="item">
              <NavLink to='/home' className="item-link">Home</NavLink>
            </li>
            <li className="item">
              <NavLink to='/calendar' className="item-link">Calendar</NavLink>
            </li>
          </ul>
        </nav>
</header>
}
export default Header;