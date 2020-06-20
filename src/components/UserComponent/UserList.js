import React, {Component} from 'react';
import API from './JSONplaceholderService';
import './UserList.css'
import UsersCard from './UsersCard'





class UserList extends Component {
    constructor(){
        super();
        this.state = {
            users: [],
            todos: []
        };
        this.runApi();


    }

    runApi(){

        API.getUsers((result)=>this.setUsers(result.data));

        API.getTodos((result)=>this.setTodos(result.data));


    }

    setTodos(todos){

        this.setState(()=>{
            return {todos}
        });
    }

    setUsers(users){

        this.setState(()=>{
            return {users}
        });
        console.log(this.state);
    }

    render(){

        return(
            <div className='user_list'>
                <h2>Пользователи</h2>
                {this.state.users.map((user, i)=><UsersCard key={i} user={user} />)}
            </div>

        )
    }

}



export default UserList;