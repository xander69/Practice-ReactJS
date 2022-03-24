const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
    dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Alexander'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valery'}
    ],
    messages: [
        {message: 'Hi'},
        {message: 'How are you?'},
        {message: 'I\'m fine'},
        {message: 'Yo yo yo'},
        {message: 'Bla-bla-bla'}
    ],
    newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const messageText = state.newMessageText
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({message: messageText})
            stateCopy.newMessageText = ''
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    }
}

export default dialogReducer