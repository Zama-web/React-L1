import React, {Component} from 'react';
import './UsersCard'





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
            <div>
                <h2>{this.name}</h2>
                <p>{this.username}</p>
                <a href={this.email}>{this.email}</a>
            </div>

        )
    }

}



export default UsersCard;
