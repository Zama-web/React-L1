import React, {Component} from 'react';
import API from './JSONplaceholderService';
import './UserList.css'
import UsersCard from './UsersCard'





class UserList extends Component {
    constructor(){
        super();
        this.state = {
            user: [],
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
    }

    render(){
                    //  onClick={()=>this.runApi()}
        return(
            <div>
                <h2>Пользователи</h2>
                {this.state.user.map(user=><UsersCard user={user} />)}
                {console.log(this.state)}
            </div>

        )
    }

}



export default UserList;