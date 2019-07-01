import React from 'react';
import {
  Typography, Card, ListItem, ListItemText, ListItemLink, CardMedia, CardContent
} from '@material-ui/core';
import './userPhotos.css';
import { Link as RouterLink } from "react-router-dom";



/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    console.log(window.cs142models.photoOfUserModel(this.props.match.params.userId));

    this.state = {
      userPhotos: window.cs142models.photoOfUserModel(this.props.match.params.userId)
      
    }

  }



  render() {

    return (
      <div  className = "cs142-userPhoto-container">
        {this.state.userPhotos.map(photo => (
          <div className="photos" key={photo._id}>
            <Card>
              <CardMedia
                  component = "img"
                  height="345"
                  src={"/images/".concat(photo.file_name)}
              />
              <CardContent>

                {/*show the date photo created*/}
              <Typography gutterBottom variant="body1">
                Created on {photo.date_time}
              </Typography>
              <br/>
              <Typography variant="h5">
                <strong>Comments</strong>
              </Typography>
              

              {/*show the comments*/}
              {photo.comments && (

                 <Typography variant="body2">
                {photo.comments.map(comment => {
                  let link = "/users/" + comment.user._id;
                  return (
                    <div key={comment._id}>
                        <ListItem>
                          <ListItemText primary={comment.comment} 
                                        secondary={comment.date_time}/>
                        </ListItem>
                        <ListItem 
                            button component = {RouterLink} to = {link} >
                            <ListItemText primary={comment.user.first_name}/> 
                        </ListItem>
                    </div>
                        
                  );
                }

                )}
              </Typography>
              )}
             
              </CardContent>
            </Card>
          </div>
        ))}

      </div>

      



    );
  }
}

export default UserPhotos;
