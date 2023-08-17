import React from "react";

interface TodoListProps {
  todos: any[];
  setTodos: any;
  setEditTodo: any;
}

const TodoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  setTodos,
  setEditTodo,
}) => {
  const handleComplete = (todo: any) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleDelete = ({ id }: any) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo: any) => (
        <li className="list-item" key={todo.id}>
          <div>
            <input
              type="checkbox"
              value={todo.completed}
              onChange={() => handleComplete(todo)}
            />
            <input
              type="text"
              value={todo.title}
              className="list"
              onChange={(event) => event.preventDefault()}
            />
          </div>
          <div>
            {/* <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              /
            </button> */}
            <button className="button-edit task-button">O</button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
