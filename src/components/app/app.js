import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';

const App = () => {

  const todoData = [
    {id: 1, label: 'Drink Coffe', important: false},
    {id: 2, label: 'Make Awesome App', important: true},
    {id: 3, label: 'Have a lunch', important: false},
  ];

  return(
    <div>
      {/* <Header /> */}
      <div className="app mt-5">
        <AppHeader toDo="1" done="3" />
        <SearchPanel />
        <TodoList todos={todoData} />
      </div>
      
    </div>
  )
}

export default App;