import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from "react-router-dom";

import { onUserExit } from '../../actions';

import './header.sass';

const Header = (props) => {

    const history = useHistory();

    const onExit = () => {
        history.push('/buros')
        props.onExit()
    }

    let switchLoginButton;

    if (props.isLoggedIn) {
        switchLoginButton = {
            text: "Мой кабинет",
            link: "/user",
            exitBtn: "btn btn-danger visible",
        };
    } else {
        switchLoginButton = {
            text: "Sign in / Sign up",
            link: "/login",
            exitBtn: "invisible",
        };
    }

    return (
        <div className="header d-flex">
            <h3>
                <Link to="/">База данных бюро</Link>
            </h3>
            <ul className="d-flex align-items-center">

                <Link to="/buros">
                    <li>
                        Список бюро
                    </li>
                </Link>

                <Link to={switchLoginButton.link} className="ml-auto">
                    <li>
                        {switchLoginButton.text}
                    </li>
                </Link>

                <button className={switchLoginButton.exitBtn} onClick={onExit}>
                    Выйти
                </button>

            </ul>
        </div>
    );
};

const mapStateToProps = ({
    loginData: { isLoggedIn }}) => {
return { isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onExit: onUserExit,
    }, dispatch);
    };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
