import gql from "graphql-tag";

export const GET_COUNTER = gql`
  query GET_COUNTER {
    count @client
  }
`;
