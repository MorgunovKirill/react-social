import * as axios from 'axios';
import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://react-social-6dbbe-default-rtdb.europe-west1.firebasedatabase.app/users1.json').then(response => {
             props.setUsers(response.data['-McOwLH1FkyhOcQsdlrH'])
        });
    }

    // let createStore = async () => {        
    //     axios.post('https://react-social-6dbbe-default-rtdb.europe-west1.firebasedatabase.app/users1.json',   [
    //         { id: 1, name: "Dmitry", status: "I'm a boss", location: {city: "Volgograd", country: "Russia"}, avatar: "", isFollowed: true},
    //         { id: 2, name: "Alex", status: "I'm a boss too", location: {city: "Tampa", country: "USA"}, avatar: "", isFollowed: true},
    //         { id: 3, name: "Marta", status: "Yo yo", location: {city: "Moscow", country: "Russia"}, avatar: "", isFollowed: false},      
    //         { id: 4, name: "Antuane", status: "Hey", location: {city: "Paris", country: "France"}, avatar: "", isFollowed: false},    
    //     ])
    // }

    // createStore();
  
    return (
        <div>
            <h2 className={classes.title}>Users</h2>
            {
                props.users.map(user => (                        
                        <div className={classes.user} key={user.id}>
                            <div className={classes.left}>                        
                                <img src={user.avatar ? user.avatar : "https://c0.klipartz.com/pngpicture/7/618/gratis-png-ilustracion-de-hombre-icono-de-avatar-avatar-de-moda-hombre.png" } alt="avatar" width="100" height="100" />
                                <button onClick={() => {props.toggleFollow(user.id)}}>
                                    {user.isFollowed ? "Follow" : "UnFollow" }                                    
                                </button>
                            </div>
                            <div className={classes.right}>
                                <div className={classes.status}>
                                    <span className={classes.name}>{user.name}</span>
                                    <span className={classes.status__text}>{user.status}</span>
                                </div>
                                <div className={classes.location}>
                                    <span className={classes.country}>{user.location.country}</span>
                                    <span className={classes.city}>{user.location.city}</span>
                                </div>
                            </div>
                        </div>
                    ))
            }    
        </div>
    )
}

export default Users;








