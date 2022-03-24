import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialog-reducer'

const Dialogs = (props) => {

    let newMessageElement = React.createRef()

    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.state.messages
        .map(message => <DialogMessage message={message.message}/>)

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e) => {
        let newText = e.target.value
        props.dispatch(updateNewMessageTextActionCreator(newText))
    }

    return <div>
        <h1>Dialogs</h1>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.dialogsMessages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea ref={newMessageElement}
                                  onChange={onNewMessageChange}
                                  value={props.state.newMessageText}
                                  placeholder='Enter new message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Dialogs;