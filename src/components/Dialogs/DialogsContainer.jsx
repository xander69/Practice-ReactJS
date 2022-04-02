import React from 'react'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialog-reducer'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessage: (newText) => {
            dispatch(updateNewMessageTextActionCreator(newText))
        }
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;