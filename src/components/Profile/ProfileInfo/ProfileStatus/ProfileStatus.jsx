import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })        
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (evt) => {
        this.setState({
            status: evt.currentTarget.value,
        });        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={ this.activateEditMode }>
                            {this.props.status 
                            ? this.props.status 
                            : '----'}                            
                        </span>
                    </div>
                    : <div>
                        <input autoFocus onBlur={this.deactivateEditMode} onChange={this.onStatusChange} value={this.state.status}></input>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;








