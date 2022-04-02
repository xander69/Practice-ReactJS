import React from "react";
import {connect} from 'react-redux'
import Profile from './Profile'
import {getUserProfile} from '../../redux/profile-reducer'
import {withParams} from '../../util/util'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.loadProfile()
    }

    loadProfile() {
        let userId = this.props.params.userId;
        if (userId) {
            this.props.getUserProfile(userId)
        } else {
            this.props.getUserProfile(this.props.currentUser.id)
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentUser: state.auth.data
})

export default connect(
    mapStateToProps,
    {
        getUserProfile
    })(withParams(AuthRedirectComponent))