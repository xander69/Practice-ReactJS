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
                    Hi, {props.currentUser.fullName}!
                    <span className={s.loginLogoutButton}>
                        <button onClick={props.logout}>Log out</button>
                    </span>
                </div>
                : <div className={s.headerLogin}>
                    <span className={s.loginLogoutButton}>
                        <NavLink to={'/login'}>
                            <button>Login</button>
                        </NavLink>
                    </span>
                </div>
        }
    </header>
}

export default Header;