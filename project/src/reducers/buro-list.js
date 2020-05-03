import {toFilter} from '../utils'

const updateBuroList = (state, action) => {

    const initialState = {
        buros: [],
        viewedBuros: [],
        loading: true,
        error: null,
    }

    if (state === undefined) {
        return initialState;
    };

    switch (action.type) {
        case 'FETCH_MODELS_REQUEST':
            return initialState;

        case 'FETCH_MODELS_SUCCESS':
            return {
                ...initialState,
                buros: action.payload,
                viewedBuros: action.payload,
                loading: false,
            };

        case 'FETCH_MODELS_FAILURE':
            return {
                ...initialState,
                loading: false,
                error: action.payload,
            };

        case 'FILTER_BURO_DATA':
            return {
                ...initialState,
                buros: action.payload,
                viewedBuros: toFilter(action.payload, action.filter),
                loading: false,
            };

        default:
            return state.buroList;
    }

};

export default updateBuroList;
