import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return <div className={s.navbar}>
        <ul>
            <li>Main</li>
            <li>Profile</li>
            <li>News</li>
            <li>Dialogs</li>
            <li>Music</li>
            <li>Settings</li>
        </ul>
    </div>
}

export default Navbar;