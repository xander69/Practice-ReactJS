import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {
            message: 'Hi! Who are you?',
            dateTime: '2020-01-01 12:30',
            likeCount: '10',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=PastelBlue&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Grimace&skinColor=Light'
        },
        {
            message: 'Hello! I&apos;m John.',
            dateTime: '2020-01-01 13:24',
            likeCount: '4',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Sunglasses&hatColor=Red&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Close&eyebrowType=Angry&mouthType=Eating&skinColor=Black'
        },
        {
            message: 'Nice to meet you. What&apos; are your favourite bread?',
            dateTime: '2020-01-02 00:05',
            likeCount: '0',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Prescription01&hatColor=Blue02&hairColor=SilverGray&facialHairType=MoustacheFancy&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&eyeType=Hearts&eyebrowType=SadConcernedNatural&mouthType=Serious&skinColor=Pale'
        },
        {
            message: 'Ciabatta, of course.',
            dateTime: '2020-01-03 11:51',
            likeCount: '1',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Pale'
        },
        {
            message: 'Good choice. And my one is french bread',
            dateTime: '2020-01-03 23:19',
            likeCount: '0',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Prescription01&hatColor=PastelRed&hairColor=Platinum&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue01&eyeType=EyeRoll&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Brown'
        },
        {
            message: 'You are serious guy...',
            dateTime: '2020-01-04 12:16',
            likeCount: '7',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Kurt&hatColor=Blue03&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Close&eyebrowType=AngryNatural&mouthType=Eating&skinColor=Tanned'
        }
    ]

    let postsElements = postsData.map(post => <Post message={post.message}
                                                    dateTime={post.dateTime}
                                                    likeCount={post.likeCount}
                                                    avatar={post.avatar}/>)

    return <div>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea cols={60} rows={1}/>
            </div>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;