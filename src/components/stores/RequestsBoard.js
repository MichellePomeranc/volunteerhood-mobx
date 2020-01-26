// import { observable, action, computed } from "mobx";
import { observable} from "mobx";
import axios from 'axios';

export class RequestsBoard {
    @observable feed = []
    @observable user = {}
    @observable left= false
    
    async getFeed() {
		let response = await axios.get('http://localhost:8080/feed');
		// this.setState({ feed: response.data[0] });
		this.feed = response.data[0]
	}

    acceptReq = (reqId) => {
		let helperId = this.user.id
		// console.log(helperId)
		axios.put(`http://localhost:8080/feed/${reqId}/${helperId}`)
    }
    
    addNewRequest = (obj) => {
		console.log(obj)
		let newRequest = {
			userReq: this.user.id,
			description: obj.text,
			skill: obj.skill,
			date: obj.date
		}
		const response = axios.post(`http://localhost:8080/feed`, newRequest)
		// this.getFeed()
	}	
}