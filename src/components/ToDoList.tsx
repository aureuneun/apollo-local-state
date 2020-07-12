import React, { ReactNode } from "react";

const ToDoList = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>{children}</ul>
    </>
  );
};

export default ToDoList;
