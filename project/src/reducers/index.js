import updateBuroList from './buro-list';
import updateLoginData from './login-data';

const reducer = (state, action) => {

    const updateBuroItemHistory = (state, action) => {

        const initialState = {
            selectedBuroItem: null
        }

        if (state === undefined) {
            return initialState.selectedBuroItem;
        };

        switch (action.type) {
            case 'SELECT_BURO_ITEM':
                const target = action.payload.target;
                return target.id

            default:
                return state.selectedBuroItem;
        }

    }

    let result = {
        buroList: updateBuroList(state, action),
        selectedBuroItem: updateBuroItemHistory(state, action),
        loginData: updateLoginData(state, action),
    };

    return result
};

export default reducer;
