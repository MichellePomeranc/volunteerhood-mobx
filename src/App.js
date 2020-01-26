import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Feed from './components/Feed';
// import UserLog from './components/Login-Signup'
// import Help from './components/Help';
import UserLog from './components/Login-Signup'
import Menu from './components/Menu';
import Profile from './components/Profile';
import 'font-awesome/css/font-awesome.min.css';
import New_Request from './components/New_Request';
import { observer, inject } from 'mobx-react';
// import Landing from './components/Landing';


// const initialState={
// 	feed: [],
// 	left: false,
// 	user: {
// 		id: Number,
// 		login: false,
// 		name: 'guest',
// 		email: '',
// 		password: '',
// 		phone: '',
// 		radius: Number,
// 		ranking: Number,
// 		counter: Number
// }
// }

@inject("Request","Feed","User")
@observer
class App extends Component {
	// constructor() {
	// 	super();
	// 	// this.state = initialState;
	// }

	componentDidMount() {
		this.props.Feed.getFeed();
	}

	render() {
		// console.log(this.state.user)
		return (
			<div>
				<Router>
					<Menu user={this.props.Feed.user} logout={this.props.User.logout}/>
					{/* <Route path="/" exact render={() => <Landing/>} /> */}
					<Route path="/feed" exact render={() => <Feed acceptReq={this.props.Feed.acceptReq} />} />
					<Route path="/profile" exact render={() => <Profile />} />
					<Route path="/login" exact render={() => <UserLog addNewUser={this.props.user.addNewUser} login={this.props.user.login} />} />
					<Route path="/newRequest" exact render={() => <New_Request addNewRequest={this.props.Feed.addNewRequest} />} />
				</Router>
			</div>
		);
	}
}

export default App;
