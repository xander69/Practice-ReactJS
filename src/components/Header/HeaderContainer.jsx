import React from 'react';
import Header from './Header'
import axios from 'axios'
import {connect} from 'react-redux'
import {setAuthUserData} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios
            .get('http://localhost:9000/api/1.0/auth/me',
                {headers: {'With-Credential': true}})
            .then(response => {
                this.props.setAuthUserData(response.data)
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