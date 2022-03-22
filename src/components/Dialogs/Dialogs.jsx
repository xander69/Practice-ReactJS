import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`
    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const DialogMessage = (props) => {
    return <div className={s.message}>
        {props.message}
    </div>
}

const Dialogs = () => {
    return <div>
        <h1>Dialogs</h1>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="Dmitriy"/>
                <DialogItem id="2" name="Andrey"/>
                <DialogItem id="3" name="Svetlana"/>
                <DialogItem id="4" name="Alexander"/>
                <DialogItem id="5" name="Viktor"/>
                <DialogItem id="6" name="Valery"/>
            </div>
            <div className={s.messages}>
                <DialogMessage message="Hi"/>
                <DialogMessage message="How are you?"/>
                <DialogMessage message="I'm fine"/>
            </div>
        </div>
    </div>
}

export default Dialogs;