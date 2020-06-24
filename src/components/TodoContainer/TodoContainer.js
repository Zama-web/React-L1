import React, { Component }  from 'react';
import TodoItem from './TodoItem';
import Counter from './Counter';



    const data = [
        {
            id: 1,
            title: 'Проснутся',
            content: 'Сегодня рано встал',
            complited: false
        },
        {
            id: 2,
            title: 'Позавтракать',
            content: 'Набить животик',
            complited: true
        },
        {
            id: 3,
            title: 'Погулять',
            content: 'По парку Горького',
            complited: false
        },
        {
            id: 4,
            title: 'Обед',
            content: 'Ням ням и еще раз ням',
            complited: false
        },
        {
            id: 5,
            title: 'Постмотреть TV',
            content: 'Любимые сериалы',
            complited: false
        },
        {
            id: 6,
            title: 'Занятие спортом',
            content: 'Пробежка, Зарядка',
            complited: false
        },
        {
            id: 7,
            title: 'Вечерняя прогулка',
            content: 'Встреча с друзьями',
            complited: false
        },
        {
            id: 8,
            title: '19:00-22:00',
            content: 'Занятие в HackerU :-)',
            complited: false
        }
    ];

class TodoContainer extends Component {

    constructor(){
        super();
        this.state = {data};

    }

    changeComplited(id){
        const data = this.state.data
        data.find(elem=>elem.id === id).complited = !data.find(elem=>elem.id === id).complited
        this.setState({data});
    }


    render(){
        const data = this.state.data;

        const allTodos = ()=>data.length
        const doneTodos = ()=>data.filter(elem=>elem.complited).length
    
        return(
            <div>
                {data.map((item, i)=><TodoItem 
                        key={i} 
                        changeComplited={(id)=>this.changeComplited(id)}  
                        descr={item}
                        />)}
            
                    <Counter done={doneTodos()} all={allTodos()}/>            
            </div>
        )
    }


    
}

export default TodoContainer;


