import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileData } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


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

export default compose(
    connect(mapStateToProps, {getProfileData}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);





