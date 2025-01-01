import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counter/cunterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  // console.log(counter);
  const dispatch = useDispatch();
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
