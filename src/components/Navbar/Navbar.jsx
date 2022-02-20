import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const activeClassName = ({ isActive }) => isActive ? s.active : "";

const Navbar = () => {
    return <div className={s.navbar}>
        <div className={s.item}>
            <NavLink to="/" className={activeClassName}>Main</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/profile" className={activeClassName}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className={activeClassName}>News</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" className={activeClassName}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className={activeClassName}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" className={activeClassName}>Settings</NavLink>
        </div>
    </div>
}

export default Navbar;