import React, {Component} from 'react';
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

  useStyles = () => 
    makeStyles({
      list: {
        textDecorationLine: 'none',
        color: 'black',
        width: '70vw',
        fontFamily: 'sans-serif',
        fontSize: '25px'
      }
    })
  
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
      textDecorationLine: 'none',
      color: 'black',
      width: '70vw',
      fontFamily: 'sans-serif',
      fontSize: '25px'
  
      }

    const classes = this.state.classes
    const sideList = (side, login) => (
      <div style={list} role="presentation" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar><Avatar alt="Remy Sharp" src="../public/logo512.png" /></ListItemAvatar>
          </ListItem>
          <Divider />
          <ListItem><Link to="/profile"className={classes.list}>Profile</Link></ListItem>
          <Divider />
          <ListItem><Link to="/feed"className={classes.list}>Feed</Link></ListItem>
          <Divider />
          <ListItem>{login === 'false' ? <Link className={classes.list} to="/login">Log In</Link> : <Link className={classes.list} to="/" onClick={logout}>Log out</Link>}</ListItem>
          <Divider />
        </List>
      </div>
    );
  

    return (
      <div>
        <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
        <Drawer style={list} open={this.state.left} onClose={toggleDrawer('left', false)}>{sideList('left', `${this.props.User.user.login}`)}</Drawer>
      </div>
    );
  }
  
}
export default Menu