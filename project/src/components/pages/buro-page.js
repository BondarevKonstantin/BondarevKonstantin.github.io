import React from 'react';
import { withRouter } from 'react-router-dom';

import BuroList from '../buro-list';
import { BuroDetails } from '../details'
import Row from '../row';

const BuroPage = () => {

    return (
        <Row
            left={<BuroList />}
            right={<BuroDetails />}
        />
    );
};

export default withRouter(BuroPage);
