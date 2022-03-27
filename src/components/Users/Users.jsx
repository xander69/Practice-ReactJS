import React from 'react'
import axios from 'axios'
import s from './Users.module.css'

class Users extends React.Component {

    constructor(props) {
        super(props)
        console.log('construct Users component')
    }

    componentDidMount() {
        this.initialiseUsers()
    }

    initialiseUsers() {
        if (this.props.users.length === 0) {
            axios
                .get('http://localhost:9000/api/1.0/users?_page=1')
                .then(response => this.props.setUsers(response.data))
        }
    }

    render() {
        return <div>
            <h1>Users</h1>
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