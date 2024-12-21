import { useState } from "react";
import "./App.css";
import ChildButton from "./components/ChildButton";

function App() {
  const COUNT = 0;
  const [count, setCount] = useState(COUNT);
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const resetCount = () => {
    setCount(COUNT);
  };

  return (
    <div>
      <h1>{count}</h1>
      <ChildButton onClick={incrementCount} buttontext="Increment" />
      <ChildButton onClick={decrementCount} buttontext="Decrement" />
      <ChildButton onClick={resetCount} buttontext="Reset" />
    </div>
  );
}

export default App;
