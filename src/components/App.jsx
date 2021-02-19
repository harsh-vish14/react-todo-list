import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [state, setState] = useState([]);
  var handleChange = (event) => {
    var valueCame = event.target.value;
    setValue(valueCame);
  };
  var buttonClicked = () => {
    setState((preve) => {
      return [...preve, value];
    });
    setValue("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={value} />
        <button onClick={buttonClicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {state.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
