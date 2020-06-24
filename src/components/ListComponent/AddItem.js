import React, {Component} from 'react';
import './AddItem.css';


class AddItem extends Component {

    constructor(props){
        super(props);

        this.state={
            name:  '',
            username:  '',
            phone: ''
        }
    }

    submitHandler(event){
        event.preventDefault();
        let {name, username, phone} = this.state;
        this.props.addUser(name, username, phone);
    }


    changeInputValue(event, inputName){
        
        const targetValue = event.target.value;

        this.setState((prev)=>{
            prev[inputName] = targetValue;
            return prev;
        })
    }


    render(){

        return(
            <form  onSubmit={(event)=>this.submitHandler(event)}>
                <div className='field'>
                    <label>Имя</label>
                    <input 
                        value={this.state.name} type="text" 
                        onChange={(event)=>this.changeInputValue(event, 'name')} />
                </div>
                <div className='field'>
                    <label>Ник</label>
                    <input 
                        value={this.state.username} type="text" 
                        onChange={(event)=>this.changeInputValue(event, 'username')} />
                </div>
                <div className='field'>
                    <label>Телефон</label>
                    <input 
                        value={this.state.phone} type="text" 
                        onChange={(event)=>this.changeInputValue(event, 'phone')} />
                </div>
            <button>Добавить</button>
            </form>        
        )
    }

}


export default AddItem;