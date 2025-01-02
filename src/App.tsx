import "./App.css";
import { Button } from "./components/ui/button";
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
      <Button onClick={() => handleIncrementByFive(5)}>
        incrementByNumberFive
      </Button>
      <Button onClick={handleIncrement}>increment</Button>
      <div>{count}</div>
      <Button onClick={handleDecrement}>decrement</Button>
    </div>
  );
}

export default App;
