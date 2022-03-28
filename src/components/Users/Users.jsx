import React from 'react'
import axios from 'axios'
import s from './Users.module.css'

class Users extends React.Component {

    constructor(props) {
        super(props)
        console.log('construct Users component')
    }

    componentDidMount() {
        this.loadUsersPage(this.props.currentPage)
    }

    loadUsersPage(pageNumber) {
        axios
            .get(`http://localhost:9000/api/1.0/users?_page=${pageNumber}&_limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalUsersCount(response.headers['x-total-count'])
                this.props.setUsers(response.data)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.loadUsersPage(pageNumber)
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <h1>Users</h1>
            <div className={s.pagination}>
                {pages.map(page => {
                    return <span key={page}
                                 className={this.props.currentPage === page ? s.selected : undefined}
                                 onClick={() => this.onPageChange(page)}>{page}</span>
                })}
            </div>
            {
                this.props.users.map(user => <div key={user.id} className={s.userCard}>
                    <div className={s.userCardAvatar}>
                        <img src={user.avatar} alt="avatar"/>
                    </div>
                    <div className={s.userCardAction}>
                        {
                            user.followed
                                ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(user.id)}>Follow</button>
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
}

export default Users