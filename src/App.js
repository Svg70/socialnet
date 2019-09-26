import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom";
import Friends from './components/Content/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className="App">
        <div className='grid'>
          <Header />
          <Sidebar />
          <div className='content-wrapper'>
            <Route path='/Content' render={ ()=> <Content store={props.store}/>} />
            <Route path='/dialogs' render={ 
            ()=> <DialogsContainer  store={props.store}
            />}/>
            <Route path='/Friends' component={Friends} />
            <Route path='/Users' render={ ()=><UsersContainer/>} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
