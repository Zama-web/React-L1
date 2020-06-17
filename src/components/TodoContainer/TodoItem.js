import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {

    constructor({ descr }) {
        super();
        this.descr = descr;
        this.state = { complited: descr.complited };
    }

    changeClass() {
        this.setState({
            complited: !this.state.complited
        })
    }

    render() {

        console.log(new Date().toLocaleTimeString());

        let className_ = "item" + (this.state.complited ? ' complited' : '');

        return (
            <div onClick={() => this.changeClass()} className={className_}>
                <h2>
                    {this.descr.title}
                </h2>
                <p>
                    {this.descr.content}
                </p>
            </div>

        )

    }


}






// function TodoItem({descr}) {
//     let {title, content, complited} = descr;

//     let className_ = "item"+ (complited ? ' complited' : '');

//         return (
//             <div onClick={()=> className_='item complited'} className={className_}>
//                 <h2>
//                     {title}
//                 </h2>
//                 <p>
//                     {content}
//                 </p>
//             </div>   
//         )


// else{

//     return (
//         <div className="item complited">
//             <h2>
//                 {title}
//             </h2>
//             <p>
//                 {content}
//             </p>
//         </div>   
//     )



// }


// }

export default TodoItem;