import React from 'react';
import { ApiServiceConsumer } from '../api-service-context';

// Вложенный в withApiService компонент получит доступ к API
// Wrapped - Компонент, который должен получить доступ к API

const withApiService = () => (Wrapped) => {

    return (props) => {
        return(
            <ApiServiceConsumer>
                {
                    (apiService) => {
                        return(
                            <Wrapped
                                {...props}
                                apiService={apiService}/>
                        );
                    }
                }
            </ApiServiceConsumer>
        );
    };
};

export default withApiService;
