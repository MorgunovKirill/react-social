import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})

let WithAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Redirect to="/login" />
        }
    
        return <Component {...props} />
    }    

    let ConnectedAuthRedirectComponent = connect(mapStateToPropForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}


export default WithAuthRedirect;