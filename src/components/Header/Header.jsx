import React from 'react';
import s from './Header.module.css'
import logo from "../../logo.png";

const Header = () => {
    return <header className={s.header}>
        <img src={logo} alt="logo"/>
        <div>
            Bakery forum
        </div>
    </header>
}

export default Header;