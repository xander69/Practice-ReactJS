import React from 'react'
import s from './Users.module.css'

const Users = (props) => {
    return <div>
        <h1>Users</h1>
        {
            props.users.map(user => <div key={user.id} className={s.userCard}>
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
                <div className={s.userCardStatus}>
                    {user.status}
                </div>
                <div className={s.userCardLocation}>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </div>
            </div>)
        }
    </div>
}

export default Users