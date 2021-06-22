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


const App = () => { 
    
  return (
    
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />}/>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />          
          <Route path="/settings" component={Settings} />
          <Route path="/users" component={UsersContainer} />
        </div>
      </div>
    
  );
}

export default App;
