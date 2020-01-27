import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('Request', 'Feed', 'User')
@observer
class Help extends Component {

  acceptReq = () => {
    console.log(this.props.f.id);
    this.props.Feed.acceptReq(this.props.f.id, this.props.User.user.id)
  }
  render() {
    // console.log(this.props.f)
    let f = this.props.f
    return (
      <tbody id='feed'>
        <tr><th className="user">User </th><td>{f.userReq}</td></tr>
        <tr><th className="skill">Skill </th><td>{f.skill}</td></tr>
        <tr><th className="description">Description </th><td>{f.description}</td></tr>
        <tr><th className="date">Date</th><td>{f.date}</td></tr>
        <tr><th className="status">status</th><td>{f.status}</td></tr>
        <tr><td colSpan="2"><button className="help" onClick={this.acceptReq}>Help!</button></td></tr>
      </tbody>
    )
  }
}

export default Help;