import React, { useState } from "react";
import "./App.css";
import { FullInput } from "./components/FullInput";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

function App() {
  let [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
  ]);

  let [title, setTitle] = useState("");

  const addNewMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([newMessage, ...message]);
  };

  const callBack = () => {
    addNewMessage(title);
    setTitle("");
  };
  return (
    <div className="App">
      <Input title={title} setTitle={setTitle} />
      <Button name={"+"} callback={callBack} />
      {/*<FullInput addNewMessage={addNewMessage} />*/}
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
}

export default App;
