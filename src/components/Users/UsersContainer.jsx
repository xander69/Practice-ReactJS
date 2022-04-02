import React from 'react'
import {connect} from 'react-redux'
import {
    getUsers
} from '../../redux/users-reducer'
import {
    follow,
    unfollow
} from '../../redux/auth-reducer'
import {withParams} from '../../util/util'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import Users from './Users'

class UserComponent extends React.Component {
    componentDidMount() {
        const pageNumber = this.props.params.page ? this.props.params.page : this.props.currentPage
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <Users {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        currentUser: state.auth.data,
        followingInProgress: state.auth.followingInProgress
    }
}

export default withAuthRedirect(connect(
    mapStateToProps,
    {
        follow,
        unfollow,
        getUsers
    })(withParams(UserComponent)))