import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { observer, inject } from "mobx-react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
const logoBar = require('../../src/Files/volunteerhood-bar.png')


@inject("User")
@observer
class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      left: false,
      classes: this.useStyles()
    }
  }

  useStyles = () => makeStyles({})

  render() {

    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      this.setState({ [side]: open });
    };

    let logout = () => {
      this.props.logout()
    }
    const list = {
      color: 'black',
      width: '70vw',
      fontFamily: 'sans-serif',
      fontSize: '25px',
    }

    const classes = this.state.classes
    const sideList = (side, login) => (
      <div style={list} role="presentation" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
        <List>
          <ListItem >
            <ListItemAvatar><Avatar alt={this.props.User.user.name} src="../public/logo512.png" /></ListItemAvatar>
          </ListItem>
          <Divider />
          <ListItem><Link style={{ textDecoration: 'none' }} to="/profile" className={classes.list}>PROFILE</Link></ListItem>
          <Divider />
          <ListItem><Link style={{ textDecoration: 'none' }} to="/feed" className={classes.list}>FEED</Link></ListItem>
          <Divider />
          <ListItem><Link style={{ textDecoration: 'none' }} to="/notifications" className={classes.list}>NOTIFICATIONS</Link></ListItem>
          <Divider />
          <ListItem>{login === 'false' ? <Link style={{ textDecoration: 'none' }} className={classes.list} to="/login">LOG IN</Link> : <Link style={{ textDecoration: 'none' }} className={classes.list} to="/" onClick={logout}>LOG OUT</Link>}</ListItem>
          <Divider />
        </List>
      </div>
    );


    return (
      <div>
        <AppBar position="static" style={{backgroundColor: '#F24333'}}>
          <Toolbar >
            <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{color: '#FFFFFF'}}/></Button>
            <Link to="/"><img src={logoBar} width="250" height="50" /></Link>
          </Toolbar>
        </AppBar>
        <Drawer style={list} open={this.state.left} onClose={toggleDrawer('left', false)}>{sideList('left', `${this.props.User.user.login}`)}</Drawer>
      </div>
    );
  }

}
export default Menu