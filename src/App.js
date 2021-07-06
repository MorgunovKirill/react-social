import React from 'react';
import { Route } from 'react-router';
import "./App.css";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer'
import { connect } from 'react-redux';
import Loader from './components/UI/Loader';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {            
    this.props.initializeApp();
  }

  render() {    
    if (!this.props.initialized) {
      return <Loader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});


export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);
