import React from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import TodoContainer from './components/TodoContainer/TodoContainer';
import UserList from './components/UserComponent/UserList';
import CounterClick from './components/CounterClick'


function App() {

  return (

    <div>
      <PostContainer/>
      <hr/>
      <TodoContainer/>
      <hr/>
      <UserList/>
      <hr/>
      <CounterClick/>
    </div>
    

  );

}

export default App;
