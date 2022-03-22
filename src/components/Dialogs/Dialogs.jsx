import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Alexander'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valery'}
    ]

    let messagesData = [
        {message: 'Hi'},
        {message: 'How are you?'},
        {message: 'I\'m fine'}
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    let messagesElements = messagesData.map(message => <DialogMessage message={message.message}/>)

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