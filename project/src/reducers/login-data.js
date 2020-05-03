const updateLoginData = (state, action) => {

    if (state === undefined) {
        return ""
    };

    switch (action.type) {

        case 'FETCH_LOGIN_USER':
            return {
                isLoggedIn: true,
                info: {...action.payload},
                ...state.loginData,
            }

        case 'USER_EXIT':
            return "";

        default:
            return state.loginData
    }
}

export default updateLoginData
