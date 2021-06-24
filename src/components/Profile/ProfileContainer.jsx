import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileData } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {        
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getProfileData(userId);
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

export default connect(mapStateToProps, {getProfileData})(WithRouterProfileContainerComponent);





