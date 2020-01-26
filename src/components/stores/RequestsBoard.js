import { observable, action, computed } from "mobx";
import Request from './HelpRequest'

export class RequestsBoard {
    @observable requestList = []
    @observable user
}

@action addNewRequest = (description) => {
    console.log(description)
    let newRequest = new Request(description)
    this.Request.push(newRequest)
    axios.post(`http://localhost:8080/feed`, newRequest)
    this.getFeed()
}	
