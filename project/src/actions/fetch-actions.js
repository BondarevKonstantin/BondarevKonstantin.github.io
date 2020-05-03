
const burosRequested = () => {
    return 'FETCH_MODELS_REQUEST';
};

const burosLoaded = (newBuros) => {
    return {
        type: 'FETCH_MODELS_SUCCESS',
        payload: newBuros,
    };
};

// const burosError = (error) => {
//     return {
//         type: 'FETCH_MODELS_FAILURE',
//         payload: error,
//     };
// };

const fetchBuros = (apiService) => () => (dispatch) => {
    dispatch(burosRequested());
    let buros = apiService.getAllBuros()
    dispatch(burosLoaded(buros))
    // .then((data) => dispatch(burosLoaded(data)))
    // .catch((err) => dispatch(burosError(err)));
};

export {
    fetchBuros
}
