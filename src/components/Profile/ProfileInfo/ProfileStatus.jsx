import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.profile.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.deactivateEditMode(true)
        } else if (e.key === 'Escape') {
            this.deactivateEditMode(false)
        }
    }

    deactivateEditMode = (doUpdate) => {
        this.setState({
            editMode: false
        })
        if (doUpdate) {
            this.props.updateStatus(this.props.currentUser.id, this.state.status)
        }
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.profile.status !== this.props.profile.status) {
            this.setState({
                status: this.props.profile.status
            })
        }
    }

    render() {
        return <div>
            {!this.state.editMode && this.props.currentUser.id === this.props.profile.id &&
            <div className={s.statusLine}>
                <span onDoubleClick={this.activateEditMode}>{this.state.status || 'no status'}</span>
            </div>
            }
            {!this.state.editMode && this.props.currentUser.id !== this.props.profile.id &&
            <div className={s.statusLine}>
                <span>{this.state.status || 'no status'}</span>
            </div>
            }
            {this.state.editMode &&
            <div className={s.statusLine}>
                <input onKeyDown={this._handleKeyDown}
                       onChange={this.onStatusChange}
                       value={this.state.status}
                       autoFocus
                       size={80}/>
            </div>
            }
        </div>
    }
}

export default ProfileStatus