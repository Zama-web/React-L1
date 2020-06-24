import React, {Component} from 'react';
import API from '../UserComponent/JSONplaceholderService';
import ListItem from './ListItem';
import AddItem from './AddItem';



class ListContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount(){
        API.getUsers((respons)=>this.setUsers(respons.data), (error)=> console.log(error))

    }

    setUsers(newUsers){
        const users = newUsers.map(user=>{
            const {id, name, username, phone} = user;
            return {id, name, username, phone}
        })

        this.setState(()=>{return {users}})
    }

    addUser(name, username, phone){
        this.setState((prev)=>{
            const id = prev.users.length + 1;
            const user ={id, name, username, phone}
            prev.users.push(user);
            return prev;
        })
        console.log(this.state);
 
    }

    render(){


        return(

            <div>
                <AddItem addUser={(name, username, phone)=>this.addUser(name, username, phone)}/>
                <ul>
                    {this.state.users.map(user=><ListItem key={user.id} user={user}/>)}
                </ul>
            </div>


            )
    }

}

export default ListContainer;