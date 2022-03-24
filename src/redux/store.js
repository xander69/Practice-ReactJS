import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import sidebarReducer from './sidebar-reducer'

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
        },
        sidebar: {}
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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}

export default store
window.store = store