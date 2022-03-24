import React from 'react'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialog-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                const state = store.getState()

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                }

                let updateNewMessage = (newText) => {
                    store.dispatch(updateNewMessageTextActionCreator(newText))
                }

                return <Dialogs sendMessage={sendMessage}
                                updateNewMessage={updateNewMessage}
                                dialogPage={state.dialogPage}/>;
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;