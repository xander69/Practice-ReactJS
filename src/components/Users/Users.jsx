import React from 'react'
import s from './Users.module.css'

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <h1>Users</h1>
        <div className={s.pagination}>
            {pages.map(page => {
                return <span key={page}
                             className={props.currentPage === page ? s.selected : undefined}
                             onClick={() => props.onPageChange(page)}>{page}</span>
            })}
        </div>
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

export default Users