import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, reset } from "./counterSlice";


const Main = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.value);

  return (
    <div>
      <div className="big-val">Current value: {counter}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Main;
