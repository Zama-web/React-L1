import React, {Component} from 'react';
import './ListBtnSet.css';

class ListBtnSet extends Component {

    sortById(){
        this.props.sortById();
    }
    sortByName(){
        this.props.sortByWord('name');
    }
    sortByUserName(){
        this.props.sortByWord('username');
    }

    render(){
        return(
        <div className='btnSet'>
            <button onClick={this.sortById.bind(this)}>By id</button>
            <button onClick={this.sortByName.bind(this)}>By name</button>
            <button onClick={this.sortByUserName.bind(this)}>By username</button>
        </div>
    )



    }

}


export default ListBtnSet;