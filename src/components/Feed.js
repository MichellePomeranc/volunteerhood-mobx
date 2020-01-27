import React, { Component } from 'react';
import Help from './Help'
import { Link, Redirect } from 'react-router-dom';
import { observer, inject } from "mobx-react"

@inject ('Feed', 'User', 'Request')
@observer
class Feed extends Component {

  render(){
    if(this.props.User.user.login){
      let feed = this.props.Feed.feed
      return (
        <div>
        <div>
          <h4>Hello {this.props.User.user.name}, who are you going to help today?</h4>
          <Link to="/newRequest"><button className="requestHelpBtn">Ask for Help</button></Link>
        </div>
        <table>
          {feed.map(f => <Help key={f.id} f={f} acceptReq={this.props.Feed.acceptReq} />)}
        </table>
        </div>
    )} else {
      return <Redirect to='/login'></Redirect>
    }
  }
}

export default Feed;