import * as util from './util'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let postsData = [
    {
        message: 'Hi! Who are you?',
        dateTime: '2020-01-01 12:30',
        likeCount: 10,
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=PastelBlue&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Grimace&skinColor=Light'
    },
    {
        message: 'Hello! I\'m John.',
        dateTime: '2020-01-01 13:24',
        likeCount: 4,
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Sunglasses&hatColor=Red&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Close&eyebrowType=Angry&mouthType=Eating&skinColor=Black'
    },
    {
        message: 'Nice to meet you. What\'s are your favourite bread?',
        dateTime: '2020-01-02 00:05',
        likeCount: 0,
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Prescription01&hatColor=Blue02&hairColor=SilverGray&facialHairType=MoustacheFancy&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&eyeType=Hearts&eyebrowType=SadConcernedNatural&mouthType=Serious&skinColor=Pale'
    },
    {
        message: 'Ciabatta, of course.',
        dateTime: '2020-01-03 11:51',
        likeCount: 1,
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Pale'
    },
    {
        message: 'Good choice. And my one is french bread',
        dateTime: '2020-01-03 23:19',
        likeCount: 0,
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Prescription01&hatColor=PastelRed&hairColor=Platinum&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue01&eyeType=EyeRoll&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Brown'
    },
    {
        message: 'You are serious guy...',
        dateTime: '2020-01-04 12:16',
        likeCount: 7,
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Kurt&hatColor=Blue03&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Close&eyebrowType=AngryNatural&mouthType=Eating&skinColor=Tanned'
    }
]

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
    {message: 'I\'m fine'},
    {message: 'Yo yo yo'},
    {message: 'Bla-bla-bla'}
]

let store = {
    _state: {
        profilePage: {
            posts: postsData,
            newPostText: 'default message text'
        },
        dialogPage: {
            dialogs: dialogsData,
            messages: messagesData,
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('subscriber not defined')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    _addPost() {
        this._state.profilePage.posts.push({
            message: this._state.profilePage.newPostText,
            dateTime: util.formatDate(new Date()),
            likeCount: 0,
            avatar: util.defaultAvatar
        })
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    _sendMessage() {
        const message = this._state.dialogPage.newMessageText
        this._state.dialogPage.messages.push({message: message})
        this._state.dialogPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    _updateNewMessageText(newText) {
        this._state.dialogPage.newMessageText = newText
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
        } else if (action.type === SEND_MESSAGE) {
            this._sendMessage()
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newText)
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }

}
export const updateNewPostTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
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

export default store