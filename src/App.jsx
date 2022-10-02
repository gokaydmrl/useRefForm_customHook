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

    // clear inputs either with for loop and vanilla

    // const inputs = document.getElementsByClassName("input");
    // for (var i = 0; i < inputs.length; i++) {
    //   inputs[i].value = "";
    // }

    // or by reseting with useRef
    formRef.current.reset();
  };

  return (
    <div className="App">
      <h2>useRefHook </h2>
      <form ref={formRef}>
        <label>name</label>
        <input
          id="first"
          className="input"
          type="text"
          name={"isim"}
          placeholder={"name"}
        />
        <label>surname</label>

        <input
          id="second"
          className="input"
          type="text"
          name={"surname"}
          placeholder={"surname"}
        />
        <label>email</label>

        <input
          id="third"
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
