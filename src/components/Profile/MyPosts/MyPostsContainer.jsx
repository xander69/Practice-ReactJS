import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'
import {compose} from 'redux'

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePostText: (messageText) => {
            dispatch(updateNewPostTextActionCreator(messageText))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);