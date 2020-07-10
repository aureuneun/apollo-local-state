import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
import { GET_COUNTER } from "./queries";
import { CounterState } from "./types";

export const UPDATE_COUNTER = gql`
  mutation updateCounter($offset: Int!) {
    updateCounter(offset: $offset) @client
  }
`;

const mutations = {
  updateCounter: (
    _: any,
    { offset }: { offset: number },
    { cache }: { cache: InMemoryCache }
  ) => {
    const data: CounterState | null = cache.readQuery({ query: GET_COUNTER });
    cache.writeData({ data: { count: data!.count + offset } });
    return null;
  },
};

export default mutations;
