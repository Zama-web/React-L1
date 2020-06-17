import React from 'react';
import TodoItem from './TodoItem';



function TodoContainer(descr){

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
    ]

    return(
        <div>{data.map((item, i)=><TodoItem key={i} descr={item}/>)}</div>
        )
    
}

export default TodoContainer;