import React from 'react';
import Post from './Post';




function PostContainer(){

    const data = [
        {
            title: 'Очень важная новость 1',
            content: 'Содержимое поста 1'
        },
        {
            title: 'Очень важная новость 2',
            content: 'Содержимое поста 2'
        },
        {
            title: 'Очень важная новость 3',
            content: 'Содержимое поста 3'
        },
        {
            title: 'Очень важная новость 4',
            content: 'Содержимое поста 4'
        },
        {
            title: 'Очень важная новость 5',
            content: 'Содержимое поста 5'
        },
        {
            title: 'Очень важная новость 6',
            content: 'Содержимое поста 6'
        },
        {
            title: 'Очень важная новость 7',
            content: 'Содержимое поста 7'
        },
        {
            title: 'Менее важная новость 1',
            content: 'Содержимое поста 1'
        },
    ]

    return(
    <div>{data.map((item, i)=><Post key={i} item_data={item}/>)}</div>
    )
}

export default PostContainer;