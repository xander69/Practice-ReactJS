import React from 'react'
import {Field, Form} from 'react-final-form'
import s from './Login.module.css'

const LoginForm = () => {
    return <Form onSubmit={formData => {
        console.log(formData)
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

const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}

export default Login