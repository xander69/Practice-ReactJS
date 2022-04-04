import React from 'react'
import {Field, Form} from 'react-final-form'
import s from './Login.module.css'
import {connect} from 'react-redux'
import {login} from '../../redux/auth-reducer'
import {Navigate} from 'react-router-dom'

const LoginForm = (props) => {
    return <Form onSubmit={formData => {
        props.login(formData.username, formData.password)
    }}>
        {({handleSubmit, submitting}) => (
            <form className={s.loginForm} onSubmit={handleSubmit}>
                <div>
                    <Field name={'username'} component={'input'} type={'text'} placeholder={'Login'}/>
                </div>
                <div>
                    <Field name={'password'} component={'input'} type={'password'} placeholder={'Password'}/>
                </div>
                <div>
                    <label>
                        <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
                        remember me
                    </label>
                </div>
                <div>
                    <button type="submit" disabled={submitting}>Login</button>
                </div>
            </form>
        )}
    </Form>
}

const Login = (props) => {

    if (props.isAuth) {
        return <Navigate replace to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginForm {...props}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)