import React from "react";
import s from './UserList.module.css'
import Preloader from '../../common/Preloader/Preloader'

const UserList = (props) => {
    return <>
        {
            props.isFetching
                ? <Preloader/>
                : <div>
                    {
                        props.users.map(user =>
                            <div key={user.id} className={s.userCard}>
                                <div className={s.userCardAvatar}>
                                    <img src={user.avatar} alt="avatar"/>
                                </div>
                                <div className={s.userCardAction}>
                                    {
                                        user.followed
                                            ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                            : <button onClick={() => props.follow(user.id)}>Follow</button>
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