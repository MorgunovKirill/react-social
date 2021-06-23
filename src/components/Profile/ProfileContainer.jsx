import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount() {        
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        usersAPI.getProfileData(userId).then(data => {
            this.props.setUserProfile(data);
        });
    }

    render() {
        return (           
                <Profile {...this.props} />           
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let WithRouterProfileContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithRouterProfileContainerComponent);





