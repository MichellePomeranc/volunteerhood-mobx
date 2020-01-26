import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Feed from './components/Feed';
import axios from 'axios';
// import UserLog from './components/Login-Signup'
// import Help from './components/Help';
import UserLog from './components/Login-Signup'
import Menu from './components/Menu';
import Profile from './components/Profile';
import 'font-awesome/css/font-awesome.min.css';
import New_Request from './components/New_Request';
// import Landing from './components/Landing';


const initialState={
	feed: [],
	left: false,
	user: {
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
}

class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	componentDidMount() {
		this.getFeed();
	}
	
	async getFeed() {
		let response = await axios.get('http://localhost:8080/feed');
		this.setState({ feed: response.data[0] });
	}

	 addNewUser = async (obj)=> {
		 console.log(obj);
		let newUser = {
			name: obj.name,
			email: obj.email,
			password: obj.password,
			phone: obj.phone,
			radius: 0,
			ranking: 1.5,
			counter: 0
		}
	// 	await axios.post('http://localhost:8080/signup', newUser)		
	// 	this.setState({
	// 		user: {
	// 			id: newUser.id,
	// 			login: true,
	// 			name: newUser.name,
	// 			email: newUser.email,
	// 			password: newUser.password,
	// 			phone: newUser.phone,
	// 			radius: newUser.radius,
	// 			ranking: newUser.ranking,
	// 			counter: newUser.counter
	// 		}
	// 	})
	// }
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

	acceptReq = (reqId) => {
		let helperId = this.state.user.id
		console.log(helperId)
		axios.put(`http://localhost:8080/feed/${reqId}/${helperId}`)
	}

	login = async (email, password) => {
		let user = await axios.post('http://localhost:8080/login', {
			auth: {
				email: email,
				password: password
			}
		})
	// 	console.log(user.data[0])
	// 	user = user.data[0]
	// 	this.setState({
	// 		user: {
	// 			id: user.id,
	// 			login: true,
	// 			name: user.name,
	// 			email: user.email,
	// 			password: user.password,
	// 			phone: user.phone,
	// 			radius: user.radius,
	// 			ranking: user.ranking,
	// 			counter: user.counter
	// 		}
	// 	})
	// }
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

	logout= () => {
		this.setState({
			feed: [...this.state.feed],
			left: false,
			user: initialState.user
		})
	  }

	addNewRequest = (obj) => {
		console.log(obj)
		let newRequest = {
			userReq: this.state.user.id,
			description: obj.text,
			skill: obj.skill,
			date: obj.date
		}
		axios.post(`http://localhost:8080/feed`, newRequest)
		this.getFeed()
	}	

	render() {
		console.log(this.state.user)
		return (
			<div>
				<Router>
					<Menu user={this.state.user} logout={this.logout}/>
					{/* <Route path="/" exact render={() => <Landing/>} /> */}
					<Route path="/feed" exact render={() => <Feed feed={this.state.feed} acceptReq={this.acceptReq} user={this.state.user} />} />
					<Route path="/profile" exact render={() => <Profile user={this.state.user} />} />
					<Route path="/login" exact render={() => <UserLog addNewUser={this.addNewUser} user={this.state.user} login={this.login} />} />
					<Route path="/newRequest" exact render={() => <New_Request addNewRequest={this.addNewRequest} />} />
				</Router>
			</div>
		);
	}
}

export default App;
