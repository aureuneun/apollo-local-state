export type ToDos = {
  id: number;
  text: string;
  __typename: "ToDos";
};

export type ToDosState = {
  toDos: ToDos[];
};
