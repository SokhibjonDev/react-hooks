import React, { useState, useEffect } from "react";

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return () => {
      console.log("clean type"); // clean type
    };
  }, [type]);

  const mousemoveHandler = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mousemoveHandler);
    return () => {
      window.removeEventListener("mousemove", mousemoveHandler);
    };
  });

  return (
    <div>
      <h1>Resurs : {type}</h1>

      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("todos")}>Todos </button>
      <button onClick={() => setType("posts")}>Posts</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
