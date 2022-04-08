import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import DialogMessage from './DialogMessage/DialogMessage'
import {Field, Form} from 'react-final-form'

const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogs
        .map(dialog => <DialogItem key={dialog.id}
                                   id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.dialogPage.messages
        .map(message => <DialogMessage key={message.id} message={message}/>)

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
                <AddMessageForm {...props}/>
            </div>
        </div>
    </div>
}

const AddMessageForm = (props) => {
    return <Form onSubmit={formData => {
        props.sendMessage(formData.newMessageText)
    }}>
        {({handleSubmit, submitting}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={'newMessageText'} component={'textarea'}
                           placeholder={'Enter new message'}/>
                </div>
                <div>
                    <button type="submit" disabled={submitting}>
                        Send
                    </button>
                </div>
            </form>
        )}
    </Form>
}

export default Dialogs;