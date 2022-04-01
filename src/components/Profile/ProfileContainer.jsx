import React from "react";
import {connect} from 'react-redux'
import Profile from './Profile'
import {getUserProfile} from '../../redux/profile-reducer'
import {withParams} from '../../util/util'
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.loadProfile()
    }

    loadProfile() {
        let userId = this.props.params.userId;
        if (userId) {
            this.props.getUserProfile(userId)
        } else if (this.props.isAuth) {
            this.props.getUserProfile(this.props.currentUser.id)
        }
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate replace to={'/login'}/>
        }
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    currentUser: state.auth.data
})

export default connect(
    mapStateToProps,
    {
        getUserProfile
    })(withParams(ProfileContainer))