import React from 'react';
import s from'./Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    console.log(props);
    return (
        <header className={s.header}> 
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/512px-Pornhub-logo.svg.png" alt="pic"/>

            <div className={s.loginBlock} >
                {props.isAuth ? <div> {props.login} - <button onClick={props.logout} > Log out </button> </div> :
                <NavLink to={'/login'} >
                    Login
                </NavLink> }
            </div>

     </header>

    );
}

export default Header;

