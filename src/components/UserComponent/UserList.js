import React, {Component} from 'react';
import API from './JSONplaceholderService';


class UserList extends Component {
    constructor(){
        super();
        this.state = {};

        API.getUsers((result)=>console.log(result.data));

        API.getTodos((result)=>console.log(result.data));
    }

    setTodos(user, todos){

        this.user = user;
        this.todos = todos;

    }





    render(){

        return(
            <div>
                <h2>Пользователь</h2>
            </div>

        )
    }

}





export default UserList;