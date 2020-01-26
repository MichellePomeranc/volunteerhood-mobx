import React from 'react';
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
import { observe } from 'mobx';

const useStyles = makeStyles({
  list: {
    textDecorationLine: 'none',
    color: 'black',
    width: '70vw',
    fontFamily: 'sans-serif',
    fontSize: '25px'
  }
});

// @inject("User")
// @observer
const Menu = observer (({props}) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  let logout = () => {
    props.logout()
  }

  const sideList = (side, login) => (
    <div className={classes.list} role="presentation" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar><Avatar alt="Remy Sharp" src="../public/logo512.png" /></ListItemAvatar>
        </ListItem>
        <Divider />
        <ListItem><Link className={classes.list} to="/profile">Profile</Link></ListItem>
        <Divider />
        <ListItem><Link className={classes.list} to="/feed">Feed</Link></ListItem>
        <Divider />
        <ListItem>{login === 'f' ? <Link className={classes.list} to="/login">Log In</Link> : <Link className={classes.list} to="/" onClick={logout}>Log out</Link>}</ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('false', true)}><MenuIcon /></Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>{sideList('left', `${this.props.User.login}`)}</Drawer>
    </div>
  );
}