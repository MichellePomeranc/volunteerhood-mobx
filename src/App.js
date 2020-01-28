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
import Notifications from './components/notifications';


@inject("Request", "Feed", "User")
@observer
class App extends Component {

	componentDidMount() {
		this.props.Feed.getFeed();
	}

	render() {
		return (
			<div>
				<Router>
					<Menu user={this.props.Feed.user} logout={this.props.User.logout} />
					{/* <Route path="/" exact render={() => <Landing/>} /> */}
					<Route path="/feed" exact render={() => <Feed acceptReq={this.props.Feed.acceptReq} />} />
					<Route path="/profile" exact render={() => <Profile />} />
					<Route path="/login" exact render={() => <UserLog /*addNewUser={this.props.User.addNewUser} login={this.props.User.login} */ />} />
					<Route path="/newRequest" exact render={() => <New_Request addNewRequest={this.props.Feed.addNewRequest} />} />
					<Route path="/notifications" exact render={() => <Notifications />} />
				</Router>
			</div>
		);
	}
}

export default App;
