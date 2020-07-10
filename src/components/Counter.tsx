import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { GET_COUNTER } from "../apollo/counter/queries";
import { UPDATE_COUNTER } from "../apollo/counter/mutations";
import { CounterState } from "../apollo/counter/types";

const Counter = () => {
  const { data } = useQuery<CounterState>(GET_COUNTER);
  const [increase] = useMutation<DocumentNode>(UPDATE_COUNTER, {
    variables: { offset: 1 },
  });
  const [decrease] = useMutation<DocumentNode>(UPDATE_COUNTER, {
    variables: { offset: -1 },
  });
  return (
    <>
      <div>{data?.count}</div>
      <button onClick={() => increase()}>INC</button>
      <button onClick={() => decrease()}>DEC</button>
    </>
  );
};

export default Counter;
