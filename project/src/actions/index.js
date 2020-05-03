import {
    fetchBuros
} from './fetch-actions'

import {
    fetchLogin,
    onUserExit,
} from './login-actions'

const filterBuroData = (data, filter) => {
    return {
        type: 'FILTER_BURO_DATA',
        payload: data,
        filter: filter,
    }
}

const buroItemSelect = (selectedItem) => {
    return {
        type: 'SELECT_BURO_ITEM',
        payload: selectedItem
    }
}

export {
    fetchBuros,
    filterBuroData,
    buroItemSelect,
    fetchLogin,
    onUserExit,
}
