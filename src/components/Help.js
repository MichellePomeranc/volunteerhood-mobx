import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';

@inject('Request', 'Feed', 'User')
@observer
class Help extends Component {
  constructor() {
    super();
    this.state = {
        style: this.useStyles()
    }
}

  useStyles = () => makeStyles({})

  acceptReq = () => {
    console.log(this.props.f.id);
    this.props.Feed.acceptReq(this.props.f.id, this.props.User.user.id)
  }
  
  render() {
    const list = {
      border: 0,
      borderRadius: 4,
      backgroundColor: '#5B2333',
      boxShadow: '#564D4A',
      color: 'white',
      height: 40,
      width: '90vw',
      letterSpacing: 2,
      fontSize: 16
  }

  const style = this.state.style

    let f = this.props.f
    return (
      <tbody id='feed'>
        <tr><th className="user">User </th><td>{f.name}</td></tr>
        <tr><th className="skill">Skill </th><td>{f.skill}</td></tr>
        <tr><th className="description">Description </th><td>{f.description}</td></tr>
        <tr><th className="date">Date</th><td>{f.date}</td></tr>
        <tr><th className="status">Status</th><td>{f.status}</td></tr>
        <tr><td colSpan="2"><button style={list} className={style.list} onClick={this.acceptReq}>HELP</button></td></tr>
      </tbody>
    )
  }
}

export default Help;