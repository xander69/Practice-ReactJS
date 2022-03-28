import {connect} from "react-redux";
import UsersApiComponent from './UsersApiComponent'
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    toggleIsFetchingActionCreator,
    unfollowActionCreator
} from '../../redux/users-reducer'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageActionCreator(pageNumber)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountActionCreator(totalCount)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingActionCreator(isFetching))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)