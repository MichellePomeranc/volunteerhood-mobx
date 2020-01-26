import React, { Component } from 'react';
import Help from './Help'
import { Link, Redirect } from 'react-router-dom';
import { observable } from "mobx"

class Feed extends Component {

  acceptReq = (id) => {
    this.props.acceptReq(id);
  }

  render(){
    // console.log(feed)
    if(this.props.user.login){
      let feed = this.props.feed
      return (
        <div>
        <div>
          <h4>Hello {this.props.user.name}, who are you going to help today?</h4>
          <Link to="/newRequest"><button role="button" className="requestHelpBtn">Ask for Help</button></Link>
        </div>
        <table>
          {feed.map(f => <Help key={f.id} f={f} acceptReq={this.acceptReq} />)}
        </table>
        </div>
    )} else {
      return <Redirect to='/login'></Redirect>
    }
  }
}

export default Feed;