import React from 'react';
import Header from './Header'
import {connect} from 'react-redux'
import {setAuthUserData} from '../../redux/auth-reducer'
import {authApi} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authApi.authMe()
            .then(data => {
                this.props.setAuthUserData(data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        fullName: state.auth.data.fullName
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);