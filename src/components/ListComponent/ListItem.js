import React, {Component} from 'react';
import './ListItem.css'

class ListItem extends Component {

    deleteList(){

          console.log('deleteList')
    }

    render(){
        let {id, name, username, phone} = this.props.user

        return(
            <li className='listItem'>
                <span>{id}) </span>
                <span>{name}</span>
                <span>{username}</span>
                <span>{phone}</span>
                <p 
                onClick={this.deleteList.bind(this)}
                className='deleteList'>x</p>
            </li>
        )
    }

}
//<button onClick={()=>this.deleteRows()}>
// delete
// </button>


export default ListItem;