const loginUser = (data) => {
    alert("Вы успешно вошли")
    return {
        type: 'FETCH_LOGIN_USER',
        payload: data,
    };
};

const onUserExit = () => 'USER_EXIT';

const fetchLogin = (apiService) => (data) => (dispatch) => {
    let info = apiService.getUserInfo(data);
    if (info) {
        console.log(info);
        dispatch(loginUser(info))
    }
};

export {
    fetchLogin,
    onUserExit,
}
