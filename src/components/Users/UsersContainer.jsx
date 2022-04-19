import React from 'react'
import {connect} from 'react-redux'
import {requestUsers} from '../../redux/users-reducer'
import {follow, unfollow} from '../../redux/auth-reducer'
import {withRouterParams} from '../../hoc/withRouterParams'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import Users from './Users'
import {compose} from 'redux'
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getCurrentUser,
    getFollowingInProgress
} from '../../redux/users-selectors'

class UserComponent extends React.Component {
    componentDidMount() {
        const pageNumber = this.props.params.page ? this.props.params.page : this.props.currentPage
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <Users {...this.props}/>
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         currentUser: state.auth.data,
//         followingInProgress: state.auth.followingInProgress
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        currentUser: getCurrentUser(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            follow,
            unfollow,
            requestUsers
        }),
    withRouterParams,
    withAuthRedirect
)(UserComponent)