import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
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
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />}/>
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />          
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
