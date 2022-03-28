import React from 'react'
import s from './Users.module.css'
import UserList from './UserList/UserList'

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
        <UserList users={props.users}
                  isFetching={props.isFetching}
                  follow={props.follow}
                  unfollow={props.unfollow}/>
    </div>
}

export default Users