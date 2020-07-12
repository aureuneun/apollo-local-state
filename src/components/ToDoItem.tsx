import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { REMOVE_TODO } from "../apollo/todos/mutations";

const ToDoItem = ({ id, text }: { id: number; text: string }) => {
  const [removeToDo] = useMutation(REMOVE_TODO, { variables: { id } });
  return (
    <li>
      <span>{text}</span>
      <button onClick={() => removeToDo()}>x</button>
    </li>
  );
};

export default ToDoItem;
