import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {

    const [ emailAndPassword, setCredentials ] = useState({ displayName: '', email: '', password: '', confirmPassword: ''});
    const { displayName, email, password, confirmPassword } = emailAndPassword;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("password don't match!");
            return;
        }

        signUpStart({email,password,displayName});
            
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setCredentials({ ...emailAndPassword, [name]: value });
    }

    return (
    <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your E-Mail and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' required></FormInput>
            <FormInput type='email' name='email' value={email} onChange={handleChange} label='E-Mail' required></FormInput>
            <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required></FormInput>
            <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confirm Password' required></FormInput>
            <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
    </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: emailAndPassword => dispatch(signUpStart(emailAndPassword))
})

export default connect(null,mapDispatchToProps)(SignUp);