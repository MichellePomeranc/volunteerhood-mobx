import React, { Component } from 'react';
import Help from './Help'
import { Link, Redirect } from 'react-router-dom';
import { observer, inject } from "mobx-react"

@inject ('Feed', 'User', 'Request')
@observer
class Feed extends Component {

  acceptReq = (id) => {
    this.props.acceptReq(id);
  }

  render(){
    // console.log(feed)
    if(this.props.User.login){
      let feed = this.props.feed
      return (
        <div>
        <div>
          <h4>Hello {this.props.User.name}, who are you going to help today?</h4>
          <Link to="/newRequest"><button className="requestHelpBtn">Ask for Help</button></Link>
        </div>
        <table>
          {this.props.Feed.feed.map(f => <Help key={f.id} f={f} acceptReq={this.acceptReq} />)}
        </table>
        </div>
    )} else {
      return <Redirect to='/login'></Redirect>
    }
  }
}

export default Feed;