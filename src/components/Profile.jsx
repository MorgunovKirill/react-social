import React from 'react';
import classes from "./Profile.module.css";

const Profile = () => {
    return (
      <div className={classes.content}>
        <div>
        <div className={classes.header}>
          <img src="https://nv.ua/img/forall/users/0/2/barbuda-115-re.jpg" alt="beach"  />
        </div>
        <div className={classes.main}>
            <div className={classes.ava}>
              <img src="https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275222-stock-photo-office-avatar-man.jpg" alt="" />
              <p>Dmitry K.</p>
            </div>
            <div className={classes.my_posts}>
              <h2>My posts</h2> 
              <textarea name="mypost" placeholder="your news"></textarea>   
              <button type="button">Send</button>
              </div>
            <div className={classes.new_posts}>
              <div className={classes.post}>post 1</div>
              <div className={classes.post}>post 2</div>
            </div>         
          </div>
        </div>      
      </div>
    )
}

export default Profile;





