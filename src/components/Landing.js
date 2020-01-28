import React, { Component } from 'react';
const logo = require('../../src/Files/volunteerhood.png')


export default class Landing extends Component {
  render() {
    return (
      <div className="row">
        <div className="logo">
          <img className="logo" src={logo} width="300" height="300" />
        </div>
      </div>
    );
  }
}    