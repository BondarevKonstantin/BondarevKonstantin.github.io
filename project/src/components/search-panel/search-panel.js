import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import {
    filterBuroData,
} from '../../actions';

class SearchPanel extends Component {

    onChange = (event) => {
        const target = event.target.value
        this.props.filterBuroData(this.props.buros, target)
    }

    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Начните вводить, чтобы воспользоваться поиском"
                    onChange={ this.onChange }/>
        );
    };
};

const mapStateToProps = ({
    buroList: { buros }}) => {
return { buros };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        filterBuroData: filterBuroData,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
