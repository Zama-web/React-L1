import React, {Component} from 'react';
import './ListItem.css'

class ListItem extends Component {

    render(){
        let {id, name, username, phone} = this.props.user

        return(
            <li className='listItem'>
                <span>{id}) </span>
                <span>{name}</span>
                <span>{username}</span>
                <span>{phone}</span>
            </li>
        )
    }

}


export default ListItem;