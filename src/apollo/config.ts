import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { CounterState } from "./counter/types";
import counter from "./counter";

const cache = new InMemoryCache();

const link = new HttpLink({ uri: "/graphql" });

const client = new ApolloClient({
  link,
  cache,
  resolvers: {
    Mutation: { ...counter },
  },
});

const initialState: CounterState = { count: 0 };

cache.writeData({ data: initialState });

export default client;
