import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialog-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessage: (newText) => {
            dispatch(updateNewMessageTextActionCreator(newText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;