import type { RootState } from "../../src/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  start,
  stop,
  reset,
  tick,
} from "../Features/Counter/counterSlice";
import { useEffect } from "react";

const CompZeroOne: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const time = useSelector((state: RootState) => state.counterTimer.time);
  const isRunning = useSelector(
    (state: RootState) => state.counterTimer.isRunning
  );
  const dispatch = useDispatch();
  const parentCountIncrement = useSelector(
    (state: RootState) => state.counter.value
  );

  useEffect(() => {
    let interval: any;

    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, dispatch]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <h1>Component </h1>
            <h4>Counter Increment Through Redux - {parentCountIncrement}</h4>
            <br />
            <h3>{count}</h3>
            <br />
            <div>
              <button onClick={() => dispatch(increment())}>
                count increment
              </button>
              &nbsp;
              <button onClick={() => dispatch(decrement())}>
                count decrement
              </button>
            </div>
          </div>
          <div className="col text-center">
            <h1>Redux Timer</h1>
            <h4>Time: {time} seconds</h4>
            <button onClick={() => dispatch(start())}>Start</button>
            <button onClick={() => dispatch(stop())} style={{ marginLeft: 10 }}>
              Stop
            </button>
            <button
              onClick={() => dispatch(reset())}
              style={{ marginLeft: 10 }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompZeroOne;
