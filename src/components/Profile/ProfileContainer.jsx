import React from "react";
import axios from 'axios'
import {connect} from 'react-redux'
import Profile from './Profile'
import {setUserProfile} from '../../redux/profile-reducer'
import {useParams} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.loadProfile()
    }

    loadProfile() {
        let userId = this.props.params.userId;
        if (!userId) {
            //TODO: load current user from auth
            userId = 1
        }
        axios
            .get(`http://localhost:9000/api/1.0/users/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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

function withParams(Component) {
    return props => <Component {...props} params={useParams()}/>
}

export default connect(
    mapStateToProps,
    {
        setUserProfile
    })(withParams(ProfileContainer))