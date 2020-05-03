import React from 'react';

import { withApiService } from '../hoc';
import { compose } from '../../utils';

import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import './forms.sass'

const RegistrationForm = (props) => {

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push("/buros")
        props.apiService.registerUser(data)
        alert(`Вы успешно зарегистрированы под ником ${data.username}`)
    }

    let data = {
        username: "",
        email: "",
        first_name: "",
        password: "",
        password2: ""
    }

    const handleInput = (e) => {
        let value = e.target.value
        let inputType = e.target.getAttribute('datatype')

        switch (inputType) {
            case 'username':
                data.username = value
                break
            case 'email':
                data.email = value
                break
            case 'name':
                data.first_name = value
                break
            case 'pass1':
                data.password = value
                break
            case 'pass2':
                data.password2 = value
                break
        }
    }

    return(
        <div className="registration-form">
            <h2 className="registration-header">Register</h2>
            <form>

                <div className="form-group">
                    <label htmlFor="input-username">Username</label>
                    <input datatype="username" type="text" className="form-control" id="input-username" placeholder="Enter username" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="input-registration-email">Email</label>
                    <input datatype="email" type="email" className="form-control" id="input-registration-email"  placeholder="Enter email" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="input-name">First Name</label>
                    <input datatype="name" type="text" className="form-control" id="input-name" placeholder="Enter your name" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="input-registration-password">Password</label>
                    <input datatype="pass1" type="password" className="form-control" id="input-registration-password" placeholder="Enter your password" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="input-registration-password2">Enter your password again</label>
                    <input datatype="pass2" type="password" className="form-control" id="input-registration-password2" placeholder="Enter your password again" onChange={handleInput} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign in!</button>
            </form>
        </div>
    )
};

const mapStateToProps = ({loginData}) => {
return { loginData };
};

export default compose (
withApiService(),
connect(mapStateToProps)
)(RegistrationForm);
