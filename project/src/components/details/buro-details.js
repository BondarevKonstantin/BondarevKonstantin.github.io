import React from 'react';
import ItemDetails, { Record } from './item-details.js';
import { connect } from 'react-redux';


const BuroDetails = (props) => {

    let { selectedBuroItem, buros } = props;

    return(
        <ItemDetails itemId = {selectedBuroItem} data = {buros}>
            <Record field="name" label="Имя" />
            <Record field="desc" label="Описание" />
            <Record field="phone" label="Телефон" />
            <Record field="address" label="Адрес" />
        </ItemDetails>
    );
};

const mapStateToProps = ({ buroList: { buros }, selectedBuroItem }) => {
    return { selectedBuroItem, buros };
};

export default connect(mapStateToProps)(BuroDetails);
