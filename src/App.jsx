import { useState } from "react";
import "./App.css";
import useRefForm from "./hooks/useRefForm";

export default function App() {
  console.log("app rendered");
  const [arr, setArr] = useState([]);

  const { formRef, getResult } = useRefForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = getResult();
    setArr((arr) => [...arr, result]);
  };

  return (
    <div className="App">
      <h2>useRefHook </h2>
      <form ref={formRef}>
        <label>name</label>
        <input
          className="input"
          type="text"
          name={"isim"}
          placeholder={"name"}
        />
        <label>surname</label>

        <input
          className="input"
          type="text"
          name={"surname"}
          placeholder={"surname"}
        />
        <label>email</label>

        <input
          className="input"
          type="email"
          name={"email"}
          placeholder={"email"}
        />

        <button onClick={handleSubmit}>register</button>
      </form>
      {arr.length === 0
        ? "no user yet"
        : arr.map((y) => {
            return <ul key={Math.random()}>{JSON.stringify(y)}</ul>;
          })}{" "}
    </div>
  );
}
