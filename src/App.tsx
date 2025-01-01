import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  // console.log(counter);
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Redux</h1>
      <button onClick={handleIncrement}>increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}

export default App;
