import React, { Component } from 'react';

import './item-details.sass';


const Record = ({ selectedItem, field, label }) => {

    return (
        <li className="list-group-item">
            <span className="term">{ label }:  </span>
            <span>{ selectedItem[field] }</span>
        </li>
    );
}

export {
    Record
};

// ==============================================================================================

class ItemDetails extends Component {

    state = {
        selectedItem: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.buros !== prevProps.buros) {
            this.updateItem();
        }
    }

    updateItem() {

        const { itemId, data } = this.props;

        if (!itemId || !data) {
            return;
        }

        this.setState({
            selectedItem: data.find(item => item.id == itemId)
        })
    }

    render() {

        const { selectedItem } = this.state;

        if (!selectedItem) {
            return <span>Пожалуйста, выберите интересующее вас бюро</span>
        }

        const { name } = selectedItem;

        return (
            <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { selectedItem });
                        })
                    }
                </ul>
            </div>
        );
    };
};

export default (ItemDetails)
