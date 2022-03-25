import * as util from '../util'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi! Who are you?',
            dateTime: '2020-01-01 12:30',
            likeCount: 10,
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=PastelBlue&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Grimace&skinColor=Light'
        },
        {
            id: 2,
            message: 'Hello! I\'m John.',
            dateTime: '2020-01-01 13:24',
            likeCount: 4,
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Sunglasses&hatColor=Red&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Close&eyebrowType=Angry&mouthType=Eating&skinColor=Black'
        },
        {
            id: 3,
            message: 'Nice to meet you. What\'s are your favourite bread?',
            dateTime: '2020-01-02 00:05',
            likeCount: 0,
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Prescription01&hatColor=Blue02&hairColor=SilverGray&facialHairType=MoustacheFancy&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&eyeType=Hearts&eyebrowType=SadConcernedNatural&mouthType=Serious&skinColor=Pale'
        },
        {
            id: 4,
            message: 'Ciabatta, of course.',
            dateTime: '2020-01-03 11:51',
            likeCount: 1,
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Pale'
        },
        {
            id: 5,
            message: 'Good choice. And my one is french bread',
            dateTime: '2020-01-03 23:19',
            likeCount: 0,
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Prescription01&hatColor=PastelRed&hairColor=Platinum&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue01&eyeType=EyeRoll&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Brown'
        },
        {
            id: 6,
            message: 'You are serious guy...',
            dateTime: '2020-01-04 12:16',
            likeCount: 7,
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Kurt&hatColor=Blue03&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Close&eyebrowType=AngryNatural&mouthType=Eating&skinColor=Tanned'
        }
    ],
    newPostText: 'default message text'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: util.getLastId(state.posts) + 1,
                        message: state.newPostText,
                        dateTime: util.formatDate(new Date()),
                        likeCount: 0,
                        avatar: util.defaultAvatar
                    }
                ],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
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

export default profileReducer