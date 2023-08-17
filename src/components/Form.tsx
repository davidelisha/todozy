import React, { FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

interface FormProps {
  input: any;
  setInput: any;
  todos: any;
  setTodos: any;
  editTodo: any;
  setEditTodo: any;
}

const Form: React.FunctionComponent<FormProps> = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const onInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
