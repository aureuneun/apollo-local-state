import React, { FormEvent, useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_TODO } from "../apollo/todos/mutations";

const ToDoForm = () => {
  const [value, setValue] = useState("");
  const [addToDo] = useMutation(ADD_TODO, { variables: { text: value } });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToDo();
    setValue("");
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
    console.log(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        value={value}
        placeholder="Write a to do"
      ></input>
    </form>
  );
};

export default ToDoForm;
