import React from 'react';
import { Route } from 'react-router';
import "./App.css";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => { 
    
  return (
    
      <div className="app-wrapper">
        <Header />
        <Sidebar store={props.store} />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />}/>
          <Route path="/profile" render={() => <Profile store={props.store} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />          
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    
  );
}

export default App;
