import React from 'react';
import './Post.css';
import ButtonSet from './ButtonSet';



function Post({item_data}){
    let {title, content} = item_data;


    // const title = 'Очень важный пост';
    // const content = 'Создание очень важного поста';
    const date= new Date().toGMTString();


    return(
        <div className="post">
            <h2>{title}</h2>
            <p>{content}</p>
            <p>{date}</p>
            <ButtonSet/>
        </div>
    )
}

export default Post;