import React from 'react'
import axios from 'axios'
import Users from './Users'

class UsersApiComponent extends React.Component {

    componentDidMount() {
        if (this.props.params.page) {
            this.onPageChange(parseInt(this.props.params.page))
        } else {
            this.loadUsersPage(this.props.currentPage)
        }
    }

    loadUsersPage(pageNumber) {
        this.props.toggleIsFetching(true)
        axios
            .get(`http://localhost:9000/api/1.0/users?_page=${pageNumber}&_limit=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setTotalUsersCount(parseInt(response.headers['x-total-count']))
                this.props.setUsers(response.data)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.loadUsersPage(pageNumber)
    }

    render() {
        return <Users {...this.props}
                      onPageChange={this.onPageChange}/>
    }
}

export default UsersApiComponent