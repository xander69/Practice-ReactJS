import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.state.messages
        .map(message => <DialogMessage message={message.message}/>)

    return <div>
        <h1>Dialogs</h1>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.dialogsMessages}>
                {messagesElements}
            </div>
        </div>
    </div>
}

export default Dialogs;