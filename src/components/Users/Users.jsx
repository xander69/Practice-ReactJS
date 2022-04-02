import React from 'react'
import s from './Users.module.css'
import UserList from './UserList/UserList'
import {NavLink} from 'react-router-dom'

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
                return <NavLink to={`/users/${page}`} key={page}
                                className={`${s.pageLink} ${props.currentPage === page ? s.selected : undefined}`}
                                onClick={() => props.getUsers(page, props.pageSize)}>{page}</NavLink>
            })}
        </div>
        <UserList users={props.users}
                  isFetching={props.isFetching}
                  follow={props.follow}
                  unfollow={props.unfollow}
                  currentUser={props.currentUser}
                  followingInProgress={props.followingInProgress}
                  toggleFollowingProgress={props.toggleFollowingProgress}/>
    </div>
}

export default Users