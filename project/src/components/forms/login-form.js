import React from 'react';

import { withApiService } from '../hoc';
import { compose } from '../../utils';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from "react-router-dom";

import { fetchLogin } from '../../actions';

import './forms.sass'

const LoginForm = (props) => {

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!data.username || !data.password) {
            alert("Введите логин и пароль в форму");
            return
        }
        history.push("/models")
        props.fetchLogin(data)
    }

    let data = {
        username: '',
        password: '',
    }

    const handleInput = (e) => {
        let value = e.target.value
        let inputType = e.target.type

        if (inputType === "email") {
            data.username = value
        } else {
            data.password = value
        }
    }

    return(
        <div className="login-form">
            <h2 className="login-header">Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="input-email">Username</label>
                    <input type="email" className="form-control" id="input-email" placeholder="Enter email" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-pass">Password</label>
                    <input id="input-pass" type="password" className="form-control" placeholder="Password" onChange={handleInput} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
};

const mapStateToProps = ({loginData}) => {
    return { loginData };
};

const mapDispatchToProps = (dispatch, {apiService}) => {
return bindActionCreators({
    fetchLogin: fetchLogin(apiService),
}, dispatch);
};

export default compose (
withApiService(),
connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);
