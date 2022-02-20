import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img src={props.avatar} alt='avatar' />
        <div className={s.postBody}>
            <div className={s.dateTime}>{props.dateTime}</div>
            <div className={s.message}>
                {props.message}
            </div>
            <div className={s.likes}>
                <strong>{props.likeCount}</strong> <span>like</span> <span>dislike</span>
            </div>
        </div>
    </div>
}

export default Post;