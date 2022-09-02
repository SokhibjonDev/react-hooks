import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}
function App() {
  const [number, setNumber] = useState(0);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({
    color: colored ? "darkred" : "black",
  }), [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("style change");
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Value : {computed}</h1>
      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          setNumber((prev) => prev - 1);
        }}
      >
        Minus
      </button>
      <button
        onClick={() => {
          setColored((prev) => !prev);
        }}
      >
        Edit
      </button>
    </>
  );
}

export default App;
