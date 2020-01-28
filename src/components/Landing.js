import React, { Component } from 'react'
const logo = require('../../src/Files/volunteerhood.png')

export default class Landing extends Component {

  render() {

    return (
      <div className="row">
        <div className="logo">
          <img className="logo" alt="Welcome" src={logo}  width="350" height="350"/>
        </div>
      </div>
    );
  }
}    