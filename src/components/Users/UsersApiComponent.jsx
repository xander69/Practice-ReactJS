import React from 'react'
import Users from './Users'
import {usersApi} from '../../api/api'

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
        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setTotalUsersCount(data.totalUsersCount)
                this.props.setUsers(data.users)
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