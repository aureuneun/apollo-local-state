import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import counter from "./counter";
import { ToDos } from "./todos/types";
import todos from "./todos";

const cache = new InMemoryCache();

const link = new HttpLink({ uri: "/graphql" });

const client = new ApolloClient({
  link,
  cache,
  resolvers: {
    Mutation: { ...counter, ...todos },
  },
});

const initialState: { count: number; toDos: ToDos[] } = {
  count: 0,
  toDos: [],
};

cache.writeData({ data: initialState });

export default client;
