import React from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import TodoContainer from './components/TodoContainer/TodoContainer';
import UserList from './components/UserComponent/UserList';
import CounterClick from './components/CounterClick'
import ListContainer from './components/ListComponent/ListConteiner'


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
      <hr/>
      <ListContainer/>
    </div>
    

  );

}

export default App;
