import {connect} from "react-redux";
import UsersApiComponent from './UsersApiComponent'
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching
} from '../../redux/users-reducer'
import {
    follow,
    toggleFollowingProgress,
    unfollow
} from '../../redux/auth-reducer'
import {withParams} from '../../util/util'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isAuth: state.auth.isAuth,
        currentUser: state.auth.data,
        followingInProgress: state.auth.followingInProgress
    }
}

export default connect(
    mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress
    })(withParams(UsersApiComponent))