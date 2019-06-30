import React from 'react';
import {
  Typography, BottomNavigation, Button, BottomNavigationAction
} from '@material-ui/core';
import './userDetail.css';





/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: window.cs142models.userModel(this.props.match.params.userId)
    }

  }
  
  render() {

    return (
      <div className = "cs142-userDetail-container">
        <Typography variant="h1">
          {this.state.users.first_name + " " + this.state.users.last_name}
          <p/>
        </Typography>
        
        <Typography variant="subtitle1">
          <strong> " {this.state.users.description} " </strong>
          <p/>
          <strong>Location:</strong> {" " + this.state.users.location}
          <p/>
          <strong>Occupation:</strong> {" " + this.state.users.occupation}
          <p/>
        </Typography>


        <Button 
            variant = "contained" 
            color = "primary" 
            className = "cs142-userDetail-botton"
            component = "a" href = {"#/photos/:" + this.state.users._id}>
          Photos
        </Button>



      </div>
    );
  }
}

export default UserDetail;


/*
        <BottomNavigation
          
        >
        <BottomNavigationAction label = "Details" />
        <BottomNavigationAction label = "Photos" />


        </BottomNavigation>

        */