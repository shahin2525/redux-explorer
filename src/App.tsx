import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  // console.log(counter);
  const dispatch = useAppDispatch();
  const handleIncrementByFive = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleIncrement = () => {
    dispatch(increment(1));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Redux</h1>
      <button onClick={() => handleIncrementByFive(5)}>
        incrementByNumberFive
      </button>
      <button onClick={handleIncrement}>increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}

export default App;
