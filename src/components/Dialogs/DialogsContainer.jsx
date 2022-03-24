import React from 'react'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialog-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    const state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let updateNewMessage = (newText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newText))
    }

    return (<Dialogs sendMessage={sendMessage}
                     updateNewMessage={updateNewMessage}
                     dialogPage={state.dialogPage}/>)
}

export default DialogsContainer;