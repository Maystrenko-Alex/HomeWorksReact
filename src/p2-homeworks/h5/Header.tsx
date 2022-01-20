import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from './Routers';
import s from './pages/Header.module.css';

function Header() {
    return (
        <div className={s.wrapper}>
            
            <NavLink 
              style={({ isActive }) =>({color: isActive ? 'red' : '', fontWeight: isActive ?  '700' : '500'})}
              to={PATH.PRE_JUNIOR } >PRE_JUNIOR</NavLink>
            <NavLink 
              style={({ isActive }) =>({color: isActive ? 'red' : '', fontWeight: isActive ?  '700' : '500'})}
              to={PATH.JUNIOR} >JUNIOR</NavLink>
            <NavLink 
              style={({ isActive }) =>({color: isActive ? 'red' : '', fontWeight: isActive ?  '700' : '500'})}
              to={PATH.JUNIOR_PLUS} >JUNIOR_PLUS</NavLink>

            <div className={s.btn}></div>

        </div>
    )
} 

export default Header
