import React from "react";
import { RootState } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Features/Counter/counterSlice";

const CompZeroOne: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const parentCountIncrement = useSelector(
    (state: RootState) => state.counter.value
  );
  return (
    <>
      <h1>Component Zero {parentCountIncrement}</h1>
      <h2>Vite + React</h2>
      <br />
      <h3>{count}</h3>
      <br />
      <div>
        <button onClick={() => dispatch(increment())}>count increment</button>
        &nbsp;
        <button onClick={() => dispatch(decrement())}>count decrement</button>
      </div>
    </>
  );
};

export default CompZeroOne;
