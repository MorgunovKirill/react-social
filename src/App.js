import React from 'react';
import { Route } from 'react-router';
import "./App.css"
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';


const App = (props) => { 
  
  return (
    
      <div className="app-wrapper">
        <Header />
        <Sidebar state={props.state.sideBar} />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />}/>
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />          
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    
  );
}

export default App;
