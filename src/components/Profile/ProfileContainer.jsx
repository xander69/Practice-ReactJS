import React from "react";
import {connect} from 'react-redux'
import Profile from './Profile'
import {getUserProfile} from '../../redux/profile-reducer'
import {withParams} from '../../util/util'

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.loadProfile()
    }

    loadProfile() {
        let userId = this.props.params.userId;
        if (!userId) {
            //TODO: load current user from auth
            userId = 12
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
    profile: state.profilePage.profile
})

export default connect(
    mapStateToProps,
    {
        getUserProfile
    })(withParams(ProfileContainer))