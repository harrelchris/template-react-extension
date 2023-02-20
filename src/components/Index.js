import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {decrement, increment, incrementByAmount} from "../redux/reducers/CounterReducer";

function Index() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Index</h1>
      <p>The count is: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
    </>
  )
}

export default Index;
