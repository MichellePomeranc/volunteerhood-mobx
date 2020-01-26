import { observable } from "mobx";
import axios from 'axios';

export class userStore {
    @observable user = {
        id: Number,
        login: false,
        name: 'guest',
        email: '',
        password: '',
        phone: '',
        radius: Number,
        ranking: Number,
        counter: Number
    }

    addNewUser = async (obj) => {
        console.log(obj);
        let newUser = {
            name: obj.name,
            email: obj.email,
            password: obj.password,
            phone: obj.phone,
            radius: 0,
            ranking: 0,
            counter: 0
        }
        let id = await axios.post('http://localhost:8080/signup', newUser)
        console.log(id.data[0])
        console.log(newUser);
        this.setState({
            user: {
                id: id.data[0],
                login: true,
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                phone: newUser.phone,
                radius: newUser.radius,
                ranking: newUser.ranking,
                counter: newUser.counter
            }
        })
    }

    login = async (email, password) => {
        let user = await axios.post('http://localhost:8080/login', {
            auth: {
                email: email,
                password: password
            }
        })
        console.log(user.data[0])
        user = user.data[0]
        this.setState({
            user: {
                id: user.id,
                login: true,
                name: user.name,
                email: user.email,
                password: user.password,
                phone: user.phone,
                radius: user.radius,
                ranking: user.ranking,
                counter: user.counter
            }
        })
    }

    logout = () => {
        this.props.Feed({
            feed: [...this.props.Feed.feed],
            left: false,
            user: this.props.User
        })
    }
}

