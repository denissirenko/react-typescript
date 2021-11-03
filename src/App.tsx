import React from 'react';

import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to='/users'>
            users
          </NavLink>
          <NavLink to='/todos'>
            todos
          </NavLink>
        </div>
        <Route path={'/users'} exact>
          <UserPage />
        </Route>
        <Route path={'/user/:id'}>
          <UserItemPage />
        </Route>
        <Route path={'/todos'} exact>
          <TodosPage />
        </Route>
        <Route path={'/todo/:id'}>
          <TodoItemPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
