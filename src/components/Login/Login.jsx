import React from 'react'
import {Field, Form} from 'react-final-form'
import s from './Login.module.css'
import {connect} from 'react-redux'
import {login} from '../../redux/auth-reducer'
import {Navigate} from 'react-router-dom'
import {Input} from '../common/Controls/FormControls'
import {requiredField} from '../../util/validators'

const LoginForm = (props) => {
    return <Form onSubmit={formData => {
        props.login(formData.username, formData.password)
    }}>
        {({handleSubmit, submitting}) => (
            <form className={s.loginForm} onSubmit={handleSubmit}>
                <div>
                    <Field name={'username'} component={Input}
                           validate={requiredField}
                           placeholder={'Login'}/>
                </div>
                <div>
                    <Field name={'password'} component={Input}
                           validate={requiredField}
                           placeholder={'Password'}/>
                </div>
                <div>
                    <label>
                        <Field name={'rememberMe'} component={Input} type={'checkbox'}/>
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