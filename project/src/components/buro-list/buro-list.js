import React, { Component } from 'react';
import ListItem from '../list-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withApiService } from '../hoc';
import { compose } from '../../utils';
import { fetchBuros, buroItemSelect } from '../../actions';
import SearchPanel from '../search-panel';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './buro-list.sass';

const BuroList = ({ buros, onItemSelect }) => {

    const onSelect = onItemSelect

    return (
        <div className="buro-section">
            <div className="buro-list-header d-flex justify-content-between">
                <h3>Все бюро добрых дел в россии</h3>
            </div>
            <SearchPanel filter="buros"/>
            <ul className="buro-list">
                {
                    buros.map((buro) => {
                        return (
                            <li key={buro.id}>
                                <ListItem item={buro} onSelect={onSelect}/>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

class BuroListContainer extends Component {

    componentDidMount() {
        this.props.fetchBuros(this.props.apiService);
    }

    render() {

        const { viewedBuros, loading, error, onItemSelect, isLoggedIn, onItemSelected } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BuroList
                buros={viewedBuros}
                onItemSelect={onItemSelect}
                isLoggedIn={isLoggedIn}
                onItemSelected={onItemSelected}/>

    };
};

const mapStateToProps = ({
        buroList: { viewedBuros, loading, error }
    }) => {
    return { viewedBuros, loading, error };
};

const mapDispatchToProps = (dispatch, {apiService}) => {
    return bindActionCreators({
        fetchBuros: fetchBuros(apiService),
        onItemSelect: buroItemSelect
    }, dispatch);
};

export default compose (
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BuroListContainer);
