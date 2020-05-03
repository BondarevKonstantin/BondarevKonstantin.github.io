import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import Header from '../header';
import {
    BuroPage,
    HomePage,
    LoginPage,
    UserPage,
} from '../pages';

import './app.sass'

const App = () => {
    return (
        <main role="main">
            <Header />
            <Switch>

                <Route path="/"
                component={HomePage}
                exact
                />

                <Route path="/buros"
                component={BuroPage}
                exact
                />

                <Route path="/login"
                component={LoginPage}
                exact
                />

                <Route path="/user"
                component={UserPage}
                exact
                />

                <Redirect to={"/"}></Redirect>
            </Switch>
        </main>
    );
};

export default App;
