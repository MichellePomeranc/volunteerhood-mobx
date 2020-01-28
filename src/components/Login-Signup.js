import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject("Request", "Feed", "User")
@observer
class UserLog extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: ""
    }
  }

  update = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }

  postNewUser = () => {
    let newUser = { ...this.state }
    this.props.User.addNewUser(newUser)
  }

  login = () => {
    let newUser = { ...this.state }
    this.props.User.login(newUser.email, newUser.password)
  }

  render() {
    if (this.props.User.user.login) {
      return (
        <Redirect exact to="/feed" />
      )
    } else {
      return (
        <div>
          <div className="loginForm">
            <h3>LOG IN</h3>
            <div><input id="emailInput" name='email' type="email" placeholder="Email" onChange={this.update}></input></div>
            <div><input id="passwordInputSignIn" name='password' type="password" placeholder="Password" onChange={this.update}></input></div>
            <button className="loginbtn" onClick={this.login}>Log In</button>


          </div>
          <div className="signupForm">
            <h3>SIGN UP</h3>
            <div><input id="nameInput" name='name' type="text" placeholder="Name" onChange={this.update}></input></div>
            <div><input id="emailInput" name='email' type="email" placeholder="Email" onChange={this.update}></input></div>
            <div><input id="passwordInputSignUp" name='password' type="password" placeholder="Password" onChange={this.update}></input></div>
            <div><input id="phoneInput" name='phone' type="text" placeholder="Phone number" onChange={this.update}></input></div>
            <button className="signupbtn" onClick={this.postNewUser}>Sign Up</button>
          </div>
        </div>
      )
    }
  }
}

export default UserLog;