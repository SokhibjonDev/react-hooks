import React, { useState, useEffect, useRef } from "react";

function App() {
  const [value, setValue] = useState("");
  const renderCount = useRef(1); // useRef funksiyani tashqarisidagi o'zgaruvchilarni olib kiradi
  const inputRef = useRef(null);
  const prevValue = useRef("");


  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();
  return (
    <div>
      <h1>Numbers of renders:{renderCount.current}</h1>
      <h2>Prev state:{prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={focus}>Focus</ button>
    </div>
  );
}

export default App;
