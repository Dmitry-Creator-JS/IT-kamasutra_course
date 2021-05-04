import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>

                <div className="app-wrapper-content">
                    <Route path='/settings' component={Settings}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>


                    <Route path='/dialogs' render={() => <DialogsContainer   />}/>
                    <Route path='/profile' render={() => <Profile   />}/>

                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
