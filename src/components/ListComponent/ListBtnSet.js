import React, {Component} from 'react';
import './ListBtnSet.css';

class ListBtnSet extends Component {

    constructor(props){
        super(props);
        this.state = {
            sortedColum: 'ID',
            sortDesc: 'ASC'
        }
    }

    sortById(){
        let {sortedColum, sortDesc} = this.state;
        if (sortedColum === 'ID'){
            sortDesc = !sortDesc;
        }else{
            sortDesc = true;
        }

        this.props.sortById({
        desc: sortDesc

        });

        this.setState((prev)=>{
            prev.sortedColum = 'ID';
            prev.sortDesc = sortDesc;
        })
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