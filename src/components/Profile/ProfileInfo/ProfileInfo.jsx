import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
        <h1>{props.profile.fullName}</h1>
        <div>
            <ProfileStatus profile={props.profile} currentUser={props.currentUser} updateStatus={props.updateStatus}/>
        </div>
        <div>
            <img className={s.avatar} src={props.profile.avatar} alt="avatar"/>
        </div>
        <div>
            <div className={s.table}>
                <div className={s.tableBody}>
                    <div className={s.tableRow}>
                        <div className={s.tableHead}>Email:</div>
                        <div className={s.tableCell}><a href="mailto:username@localhost.com">{props.profile.email}</a>
                        </div>
                    </div>
                    <div className={s.tableRow}>
                        <div className={s.tableHead}>Gender:</div>
                        <div className={s.tableCell}>{props.profile.gender}</div>
                    </div>
                    <div className={s.tableRow}>
                        <div className={s.tableHead}>Title:</div>
                        <div className={s.tableCell}>{props.profile.title}</div>
                    </div>
                    <div className={s.tableRow}>
                        <div className={s.tableHead}>Country:</div>
                        <div className={s.tableCell}>{props.profile.country}</div>
                    </div>
                    <div className={s.tableRow}>
                        <div className={s.tableHead}>City:</div>
                        <div className={s.tableCell}>{props.profile.city}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProfileInfo;