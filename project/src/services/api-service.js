import userList from './users';
import buroList from './buros';

export default class ApiService {

    toFilterId = (data, filter ) => {
        if (filter.length === 0) {
            return data
        } else {
            return data.filter((item) => {
                return item.id.toLowerCase()
                .indexOf(filter.toLowerCase()) > -1;
            });
        }
    }

    search = (searchTerm) => {
        return this.users.find(user => user.username === searchTerm)
    }

    users = userList;
    buros = buroList;

    getAllBuros = () => {
        return this.buros;
    }


    getBuro = (id) => {
        const buro = this.toFilterId(this.buros, id);
        return buro;
    }

    getUserInfo = (data) => {
        let user = this.search(data.username)
        if (data.password === user.password) {
            return user
        } else {
            alert("Неправильный логин или пароль, попробуйте еще раз")
            return null
        }
    }


    registerUser = (data) => {
        this.users.push(data)
        console.log(this.users);
    }
}
