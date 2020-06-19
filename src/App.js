import React from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import TodoContainer from './components/TodoContainer/TodoContainer';
import UserList from './components/UserComponent/UserList';


function App() {

  return (

    <div>
      <PostContainer/>
      <TodoContainer/>
      <hr/>
      <UserList/>
      <hr/>
    </div>
    

  );

}

export default App;
