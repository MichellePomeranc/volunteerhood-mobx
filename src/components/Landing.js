import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
const logo = require('../../src/Files/volunteerhood.png')

@inject("Request", "Feed", "User")
@observer
class Landing extends Component {
  

  render() {

    return (
      <div className="row">
        <div className="logo">
        </div>
        <div>{this.props.Feed.feed.length} people already got help</div>
      </div>
    );
  }
}    
export default Landing;