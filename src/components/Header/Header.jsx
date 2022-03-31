import React from 'react';
import s from './Header.module.css'
import logo from "../../logo.png";
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.headerLogo}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={s.headerTitle}>
            Bakery forum
        </div>
        {
            props.isAuth
                ? <div className={s.headerLogin}>
                    Hi, {props.fullName}!
                </div>
                : <div className={s.headerLogin}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
        }
    </header>
}

export default Header;