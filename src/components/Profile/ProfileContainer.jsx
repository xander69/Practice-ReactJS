import React from "react";
import {connect} from 'react-redux'
import Profile from './Profile'
import {setUserProfile} from '../../redux/profile-reducer'
import {withParams} from '../../util/util'
import {usersApi} from '../../api/api'

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
        usersApi.getUser(userId).then(data => this.props.setUserProfile(data))
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
        setUserProfile
    })(withParams(ProfileContainer))