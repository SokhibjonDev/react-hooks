import "./App.css";
import React, { useState } from "react";

function computeInitialCounter() {
  console.log("some calculations...");
  return Math.trunc(Math.random() * 20);
}

function App() {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter( ));
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  // if else ga useState yozish mumkin emas ! ! !
  const [state, setState] = useState({
    title: "Hello world",
    date: Date.now(),
  });
  function increment() {
    // ## // ## setCounter(counter + 1); // +1
    //

    setCounter((prev) => {
      return prev + 1;
    });
    setCounter((prev) => prev + 1);
  }

  function decriment() {
    setCounter(counter - 1);
  }
  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "Bye world",
      };
    });
  }
  return (
    <div>
      <h1>Real Madrid : {counter}</h1>
      <button onClick={increment} className="btn">
        Plus
      </button>
      <button onClick={decriment} className="btn">
        Minus
      </button>
      <button onClick={updateTitle} className="btn">
        Edit
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
