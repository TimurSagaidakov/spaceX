import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import './header.css';


const Header = (props) => {
 
return <header className="header">
        <NavLink to='/'>
        <img
            src={logo}
            alt="Logo Space X"
            className="logo"
          />
        </NavLink>
        <nav className="main-nav nav">
          <ul className="list">
            {props.rockets.map((item, index)=>(
              <li key={index} className="item">
                <NavLink to='/rocket' onClick={ () => {
                              props.changeRocket(item);
                            }} 
                            className="item-link" activeClassName='active'>{item}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="secondary-nav">
          <ul className="list">
            <li className="item">
              <NavLink to='/' exact className="item-link" activeClassName='active'>Home</NavLink>
            </li>
            <li className="item">
              <NavLink to='/calendar' className="item-link" activeClassName='active'>Calendar</NavLink>
              
            </li>
          </ul>
        </nav>
</header>
}
export default Header;