// import { observable, action, computed } from "mobx";
import { observable, action } from "mobx";
import axios from 'axios';

export class RequestsBoard {
    @observable feed = []
    @observable left = false
    @observable notifications = []

    @action async getFeed() {
        let response = await axios.get('http://localhost:8080/feed');
        // this.setState({ feed: response.data[0] });
        this.feed = response.data[0]
    }

    acceptReq = (reqId, helperId) => {
        console.log(reqId)
        console.log(helperId)
        axios.put(`http://localhost:8080/feed/${reqId}/${helperId}`)
    }

    @action addNewRequest = (id, obj) => {
        console.log(obj)
        console.log(id)
        let newRequest = new Request(
            id, obj.text, obj.skill, obj.date
        )
        axios.post(`http://localhost:8080/feed`, newRequest)
    }

    @action async matchHelpAndHelper(userId) {
        console.log(userId);
        let x = await axios.post(`http://localhost:8080/notications`, userId);
        console.log(x);
        x = x.data[0];
        console.log(x);
        // if (!this.notifications.includes(x)) {

        this.notifications.push(x)
        // }
        return x
    }
}