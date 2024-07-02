<<<<<<< HEAD
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Todo, User } from './api/todos';
import { UserInfo } from './components/UserInfo';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [users] = useState<User[]>([
    { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
    { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
  ]);

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const getUserById = (userId: number): User | null => {
    return users.find(user => user.id === userId) || null;
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm users={users} addTodo={addTodo} />
      <TodoList todos={todos} getUserById={getUserById} />
      <UserInfo user={users[0]} /> {}
=======
import React from 'react';
import './App.scss';
import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import TodoList from './components/TodoList';
import { UserInfo } from './components/UserInfo';

const enhanceTodos = (todos: any[], users: any[]) => {
  return todos.map(todo => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const user = users.find(user => user.id === todo.userId);

    return {
      ...todo,
      email: user ? user.email : '',
      name: user ? user.name : '',
    };
  });
};

const enhancedTodos = enhanceTodos(todosFromServer, usersFromServer);

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Add todo form</h1>

      <form action="/api/todos" method="POST">
        <div className="field">
          <input type="text" data-cy="titleInput" />
          <span className="error">Please enter a title</span>
        </div>

        <div className="field">
          <select data-cy="userSelect">
            <option value="0" disabled>
              Choose a user
            </option>
            {usersFromServer.map(user => (
              <UserInfo key={user.id} user={user} />
            ))}
          </select>

          <span className="error">Please choose a user</span>
        </div>

        <button type="submit" data-cy="submitButton">
          Add
        </button>
      </form>

      <TodoList todos={enhancedTodos} />
>>>>>>> 9a9744cbed8c7de13c378f61c6037a52c7e3c6ea
    </div>
  );
};

export default App;
