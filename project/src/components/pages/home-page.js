import React, { Component } from 'react';

import './pages.sass';

export default class HomePage extends Component {

    render() {
        return (
            <div className="container home-page">
                <h2>Добро пожаловать в проект Бюро Добрых Дел! (БДД)</h2>

                <p>
                    БДД также можно расшифровать, как База Данных Добра. Здесь можно найти любое интересующее вас бюро в России. Пожалуйста, регистрируйтесь, и чувствуйте себя как дома!
                </p>

                <hr />

                <h3>
                    Автор: Константин Бондарев
                </h3>

                <h3>
                    Научный руководитель: Светлана Догучаева
                </h3>
            </div>
        );
    };
};
