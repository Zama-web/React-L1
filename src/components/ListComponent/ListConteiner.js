import React, {Component} from 'react';
import API from '../UserComponent/JSONplaceholderService';
import ListItem from './ListItem';
import AddItem from './AddItem';
import ListBtnSet from './ListBtnSet'



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

    sortById(){
       this.setState((prev)=>{
           prev.users.sort((a,b)=>a.id-b.id);
           return prev;
       })
    }
    sortByWord(attr){
            this.setState((prev)=>{
            prev.users.sort((a, b)=>{

                a=a[attr].toLowerCase();
                b=b[attr].toLowerCase();

           if (a>b) return 1
           else if (a<b) return -1
           return 0
        });
        return prev;
       })

    }


    render(){


        return(

            <div>
                <AddItem addUser={(name, username, phone)=>this.addUser(name, username, phone)}/>
                <ListBtnSet 
                    sortById={this.sortById.bind(this)} 
                    sortByWord={this.sortByWord.bind(this)}
                    
                    />
                <ul>
                   

                    {this.state.users.map(user=><ListItem key={user.id} user={user}/>)}
                </ul>
            </div>


            )
    }

}

export default ListContainer;