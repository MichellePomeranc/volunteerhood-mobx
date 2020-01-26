import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject } from 'mobx-react';

@inject("User")
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      // name:"this.props",
      // Email:"anything",
      // Ranking:8,
      // Skills:"everything",

    };
  }
  render() {
    if(this.props.User.login){
    return (
      <div className="userProfile">
        <div className="profileName">Name</div>
        <div className="profileInfo">{this.props.User.name}</div>
        <div className="profileEmail">Email</div>
        <div className="profileInfo">{this.props.User.email}</div>
        <div className="profileRanking">Ranking</div>
        <div className="profileInfo">{this.props.User.ranking}<span>★</span></div>
        {/* <div className="profileSkills">Skills</div> */}
        {/* <div>Skills: {this.props.user.name}</div> */}
      </div>
    )} else {
      return <Redirect to='/login'></Redirect>
    }
  }
}

export default Profile;