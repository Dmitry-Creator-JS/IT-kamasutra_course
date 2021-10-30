import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();

    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }


        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>

                    <div className="app-wrapper-content">
                        <Route path='/settings' component={Settings}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/news' component={News}/>


                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/Users' render={() => <UsersContainer/>}/>
                        <Route path='/Login' render={() => <Login/>}/>


                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
