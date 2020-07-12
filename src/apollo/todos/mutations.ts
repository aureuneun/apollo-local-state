import { InMemoryCache } from "apollo-cache-inmemory";
import { v4 as uuidv4 } from "uuid";
import { GET_TODOS } from "./queries";
import gql from "graphql-tag";
import { ToDosState } from "./types";

export const ADD_TODO = gql`
  mutation ADD_TODO($text: String!) {
    addToDo(text: $text) @client
  }
`;

export const REMOVE_TODO = gql`
  mutation REMOVE_TODO($id: Int!) {
    removeToDo(id: $id) @client
  }
`;

const mutations = {
  addToDo: (
    _: any,
    { text }: { text: string },
    { cache }: { cache: InMemoryCache }
  ) => {
    const data = cache.readQuery<ToDosState>({ query: GET_TODOS });
    cache.writeData({
      data: {
        toDos: [...data?.toDos, { id: uuidv4(), text, __typename: "ToDos" }],
      },
    });
    return null;
  },
  removeToDo: (
    _: any,
    { id }: { id: number },
    { cache }: { cache: InMemoryCache }
  ) => {
    const data = cache.readQuery<ToDosState>({ query: GET_TODOS });
    cache.writeData({
      data: {
        toDos: data?.toDos.filter((toDo) => toDo.id !== id),
      },
    });
    return null;
  },
};

export default mutations;
