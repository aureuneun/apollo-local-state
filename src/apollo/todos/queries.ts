import gql from "graphql-tag";

export const GET_TODOS = gql`
  query GET_TODOS {
    toDos @client {
      id
      text
      __typename
    }
  }
`;
