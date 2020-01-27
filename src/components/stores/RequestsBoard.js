// import { observable, action, computed } from "mobx";
import { observable, action } from "mobx";
import axios from 'axios';
import {HelpRequest} from './HelpRequest'

export class RequestsBoard{
    @observable feed = []
    @observable left= false
    
    async getFeed() {
		let response = await axios.get('http://localhost:8080/feed');
		// this.setState({ feed: response.data[0] });
		this.feed = response.data[0]
	}

    acceptReq = (reqId, helperId) => {
        console.log(reqId)
		console.log(helperId)
		axios.put(`http://localhost:8080/feed/${reqId}/${helperId}`)
    }
    
    @action addNewRequest=(id, obj)=> {
        console.log(obj)
        console.log(id)
		let newRequest = new HelpRequest(id, obj.text, obj.skill, obj.date)
		axios.post(`http://localhost:8080/feed`, newRequest)
	}	
}