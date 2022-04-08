import * as util from '../util'

const SEND_MESSAGE = 'SEND-MESSAGE'

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
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I\'m fine'},
        {id: 4, message: 'Yo yo yo'},
        {id: 5, message: 'Bla-bla-bla'}
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: util.getLastId(state.messages) + 1,
                        message: action.messageText
                    }
                ]
            }
        }
        default:
            return state
    }
}

const sentMessageActionCreator = (messageText) => ({type: SEND_MESSAGE, messageText})

export const sendMessage = (messageText) => {
    return (dispatch) => {
        dispatch(sentMessageActionCreator(messageText))
    }
}

export default dialogReducer