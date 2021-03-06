import {sendMessage} from '../../redux/dialog-reducer'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import Dialogs from './Dialogs'
import {compose} from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)