import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { ToDosState } from "../apollo/todos/types";
import { useQuery } from "@apollo/react-hooks";
import { GET_TODOS } from "../apollo/todos/queries";
import ToDoItem from "./ToDoItem";

const ToDo = () => {
  const { data } = useQuery<ToDosState>(GET_TODOS);
  return (
    <>
      <ToDoForm />
      <ToDoList title="ToDos">
        {data?.toDos.map((toDo) => (
          <ToDoItem key={toDo.id} {...toDo} />
        ))}
      </ToDoList>
    </>
  );
};

export default ToDo;
