import { observable, action } from "mobx";
import axios from 'axios';

export class userStore {
    @observable user = {
        id: Number,
        login: false,
        name: String,
        email: '',
        password: '',
        phone: '',
        radius: Number,
        ranking: Number,
        counter: Number,
        skills: [],
        lat: Number,
        lon: Number,
        image: String
    }

    @action getSkills = async () => {
        let userId = this.user.id
        let skills = await axios.post(`http://localhost:8080/profile`, userId)
        this.user.skills = skills.data.map(s => s.skill)
    }

    @action addNewUser = async (obj) => {
        let newUser = {
            name: obj.name,
            email: obj.email,
            password: obj.password,
            phone: obj.phone,
            radius: 0,
            ranking: 0,
            counter: 0,
        }
        let id = await axios.post('http://localhost:8080/signup', newUser)
        this.user = {
            id: id.data[0],
            login: true,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            phone: newUser.phone,
            radius: newUser.radius,
            ranking: newUser.ranking,
            counter: newUser.counter,
        }
    }

    @action login = async (email, password) => {
        let user = await axios.post('http://localhost:8080/login', {
            auth: {
                email: email,
                password: password
            }
        })
        user = user.data[0]
        if (user) {
            this.user = {
                id: user.id,
                login: true,
                name: user.name,
                email: user.email,
                password: user.password,
                phone: user.phone,
                radius: user.radius,
                ranking: user.ranking,
                counter: user.counter,
                lat: 0,
                lon: 0,
                image: user.image
            }
        } else {
            alert('Please enter a valid email and password')
        }
        this.getSkills()
    } 
    
    @action logout = () => {
        this.user = {
            id: Number,
            login: false,
            name: String,
            email: '',
            password: '',
            phone: '',
            radius: Number,
            ranking: Number,
            counter: Number,
            lat: Number,
            lon: Number,
            image: String
        }
    }
}
let User = new userStore()
export default User
