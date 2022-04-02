import React from "react";
import {connect} from 'react-redux'
import Profile from './Profile'
import {getUserProfile} from '../../redux/profile-reducer'
import {updateStatus} from '../../redux/auth-reducer'
import {withRouterParams} from '../../hoc/withRouterParams'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.loadProfile()
    }

    loadProfile() {
        let userId = this.props.params.userId
        if (!userId) {
            userId = this.props.currentUser.id
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentUser: state.auth.data
})

export default compose(
    connect(mapStateToProps, {getUserProfile, updateStatus}),
    withRouterParams,
    withAuthRedirect
)(ProfileContainer)