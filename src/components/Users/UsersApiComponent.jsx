import React from 'react'
import axios from 'axios'
import Users from './Users'

class UsersApiComponent extends React.Component {

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
                this.props.setTotalUsersCount(parseInt(response.headers['x-total-count']))
                this.props.setUsers(response.data)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.loadUsersPage(pageNumber)
    }

    render() {
        return <Users users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onPageChange={this.onPageChange}/>
    }
}

export default UsersApiComponent