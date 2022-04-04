import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialog-reducer'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import Dialogs from './Dialogs'
import {compose} from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)