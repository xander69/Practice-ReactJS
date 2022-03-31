import React from "react";
import s from './UserList.module.css'
import Preloader from '../../common/Preloader/Preloader'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

const UserList = (props) => {

    const onFollow = (userId) => {
        axios.post(`http://localhost:9000/api/1.0/follow/${userId}`, {},
            {headers: {'With-Credential': true}})
            .then(props.follow(userId))
    }

    const onUnfollow = (userId) => {
        axios.post(`http://localhost:9000/api/1.0/unfollow/${userId}`, {},
            {headers: {'With-Credential': true}})
            .then(props.unfollow(userId))
    }

    return <>
        {
            props.isFetching
                ? <Preloader/>
                : <div>
                    {
                        props.users.map(user =>
                            <div key={user.id} className={s.userCard}>
                                <div className={s.userCardAvatar}>
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img src={user.avatar} alt="avatar"/>
                                    </NavLink>
                                </div>
                                <div className={s.userCardAction}>
                                    {
                                        props.isAuth ?
                                            props.currentUser.followed.includes(user.id)
                                                ? <button onClick={() => onUnfollow(user.id)}>Unfollow</button>
                                                : <button onClick={() => onFollow(user.id)}>Follow</button>
                                            : <span/>
                                    }
                                </div>
                                <div className={s.userCardHeader}>
                                    {user.fullName}
                                </div>
                                <div className={s.userCardSubtitle}>
                                    {user.title}
                                </div>
                                <div className={s.userCardLocation}>
                                    <div>{user.country}</div>
                                    <div>{user.city}</div>
                                </div>
                            </div>)
                    }
                </div>
        }
    </>
}

export default UserList