import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../Common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/AuthReducer";
import Redirect from 'react-router-dom/es/Redirect';
import style from './../Common/FormsControls/FormsControls.module.css'

const maxLength20 = maxLengthCreator(20);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} validate={[required, maxLength20]} name={'email'} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} validate={[required, maxLength20]} name={'password'} type={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} type={"checkbox"} name={'rememberMe'}/> remember me
            </div>
            {  props.error && <div className={style.formSummaryError}>
                Common Error
            </div> }
            <div>
                <button> Login</button>
            </div>
        </form>
    )


}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);

    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

            return <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>


}
 const mapStateToProps = (state) => ({
     isAuth: state.auth.isAuth

 })
export default connect(mapStateToProps, {login, logout})(Login);