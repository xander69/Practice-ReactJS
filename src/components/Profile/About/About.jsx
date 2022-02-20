import logo from '../../../logo.png';
import React from 'react';
import s from './About.module.css'

const About = () => {
    return <div>
        <img className={s.avatar} src={logo} alt="avatar"/>
        <div>
            <h3>Username</h3>
            <div className={s.table}>
                <div className={s.tableBody}>
                    <div className={s.tableRow}>
                        <div className={s.tableHead}>Email:</div>
                        <div className={s.tableCell}><a href="mailto:username@localhost.com">username@localhost.com</a></div>
                    </div>
                    <div className={s.tableRow}>
                        <div className={s.tableHead}>Full name:</div>
                        <div className={s.tableCell}>User Name</div>
                    </div>
                    <div className={s.tableRow}>
                        <div className={s.tableHead}>Language:</div>
                        <div className={s.tableCell}>Russian</div>
                    </div>
                    <div className={s.tableRow}>
                        <div className={s.tableHead}>Birth day:</div>
                        <div className={s.tableCell}>01 Jan 2000</div>
                    </div>
                    <div className={s.tableRow}>
                        <div className={s.tableHead}>Location:</div>
                        <div className={s.tableCell}>Russia, Moscow</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default About;