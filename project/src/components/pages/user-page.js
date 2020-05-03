import React from 'react';
import { connect } from 'react-redux';

import './pages.sass'

const UserPage = (props) => {

    let info = props.info

    return(
        <div className="user-page container">
            <h2>Логин: {info.username}</h2>
            <h2>Имя: {info.first_name} {info.last_name}</h2>
            <h2>E-mail: {info.email}</h2>
            <hr/>

        </div>
    )
}

const mapStateToProps = ({
    loginData: { isLoggedIn, info },
}) => {
return { isLoggedIn, info };
};

export default connect(mapStateToProps)(UserPage);
