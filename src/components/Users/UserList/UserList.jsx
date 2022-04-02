import React from "react";
import s from './UserList.module.css'
import Preloader from '../../common/Preloader/Preloader'
import {NavLink} from 'react-router-dom'

const UserList = (props) => {

    const onFollow = (userId) => props.follow(userId)

    const onUnfollow = (userId) => props.unfollow(userId)

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
                                        props.currentUser.followed.includes(user.id)
                                            ? <button disabled={props.followingInProgress.includes(user.id)}
                                                      onClick={() => onUnfollow(user.id)}>Unfollow</button>
                                            : <button disabled={props.followingInProgress.includes(user.id)}
                                                      onClick={() => onFollow(user.id)}>Follow</button>
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