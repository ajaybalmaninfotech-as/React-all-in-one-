import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux/slice/counterSlice";

function Counter() {
  const dispatch = useDispatch();

  const count = useSelector(
    (state) => state.counter.value
  );

  return (
    <div>
      <h1>Welcome to Redux React App</h1>

      <h2>Count : {count}</h2>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}

export default Counter;