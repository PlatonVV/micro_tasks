import React, { useState } from "react";
import "./App.css";
import { FullInput } from "./components/FullInput";

function App() {
  let [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
  ]);
  const addNewMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([newMessage, ...message]);
  };
  return (
    <div className="App">
      {/*<div>*/}
      {/*  <input />*/}
      {/*  <button>+</button>*/}
      {/*</div>*/}
      <FullInput addNewMessage={addNewMessage} />
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
}

export default App;
