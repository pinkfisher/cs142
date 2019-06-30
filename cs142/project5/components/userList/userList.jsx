import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';
import { freemem } from 'os';
import { Link as RouterLink } from "react-router-dom";

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: window.cs142models.userListModel(),
    }
  }



  render() {
    let userList = [];

    for(let i = 0; i < this.state.users.length; i++){
      let link = "/users/" + this.state.users[i]._id;
      userList.push(
        <div key = {i}>
        <ListItem 
          button component = {RouterLink} to = {link} >
          <ListItemText primary = {this.state.users[i].first_name + " " + this.state.users[i].last_name} />
        </ListItem>
        <Divider />
        </div>
      );
    }




    return (
      <div className = "cs142-userList-container">
        <Typography variant="h5">
          Users
        </Typography>

        <List component="nav">
        <Divider />
          {userList}
        </List>
      </div>
    );
  }
}

export default UserList;