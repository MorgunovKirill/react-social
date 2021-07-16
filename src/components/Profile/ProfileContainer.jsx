import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileData, getUserStatus, updateStatus, savePhoto} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    refreshProfile() {        
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;

            if (!userId) {
               this.props.history.push('/login');
            }
        }

        this.props.getProfileData(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {        
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {        
        if (this.props.match.params.userId !==  prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {      
        return (           
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto}
                />           
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {getProfileData, getUserStatus, updateStatus, savePhoto}),
    withRouter
)(ProfileContainer);





