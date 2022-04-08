import React from 'react'
import Post from './Post/Post'
import {Field, Form} from 'react-final-form'
import {composeValidators, maxLengthCreator, requiredField} from '../../../util/validators'
import {Textarea} from '../../common/Controls/FormControls'

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(post => <Post key={post.id}
                           message={post.message}
                           dateTime={post.dateTime}
                           likeCount={post.likeCount}
                           avatar={post.avatar}/>)

    return <div>
        <h3>My posts</h3>
        <div>
            <AddPostForm {...props} />
        </div>
        <div>
            {postsElements}
        </div>
    </div>
}

const AddPostForm = (props) => {
    return <Form onSubmit={formData => {
        props.addPost(formData.newPostText)
    }}>
        {({handleSubmit, submitting}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={'newPostText'} component={Textarea}
                           validate={composeValidators(requiredField, maxLengthCreator(10))}
                           placeholder={'Enter new post text'}/>
                </div>
                <div>
                    <button type="submit" disabled={submitting}>
                        Add post
                    </button>
                </div>
            </form>
        )}
    </Form>
}

export default MyPosts;