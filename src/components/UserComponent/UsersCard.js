import React, {Component} from 'react';
import './UserCard.css';





class UsersCard extends Component {
    constructor({user}){
    const {name, username, email} = user;
        super();
        this.name = name;
        this.username = username;
        this.email = email;

    }

    render(){

        return(
            <div className='user_card' onClick={(()=>console.log('___'))}>
                <h2>{this.name}</h2>
                <p>{this.username}</p>
                <a href={this.email}>{this.email}</a>
            </div>

        )
    }

}

export default UsersCard;
