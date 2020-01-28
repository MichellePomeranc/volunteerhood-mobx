import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject } from 'mobx-react';

@inject("User")
class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    if(this.props.User.user.login){
    return (
      <div className="userProfile">
        <div className="profileName">Name</div>
        <div className="profileInfo">{this.props.User.user.name}</div>
        <div className="profileEmail">Email</div>
        <div className="profileInfo">{this.props.User.user.email}</div>
        <div className="profileRanking">Ranking</div>
        <div className="profileInfo">{this.props.User.user.ranking}<span>★</span></div>
        {/* <div className="profileSkills">Skills</div> */}
        {/* <div>Skills: {this.props.user.name}</div> */}
      </div>
    )} else {
      return <Redirect to='/login'></Redirect>
    }
  }
}

export default Profile;