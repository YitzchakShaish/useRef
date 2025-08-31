
import React, { useRef, useState } from "react";
import TextBox from "./TextBox";

export default function ShowValue() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const showValue = () => {
    if (inputRef.current) {
      setValue(inputRef.current.value);
    }
  };

  return (
    <div>
      <h2>Show Value</h2>
      <TextBox placeholder="enter your text" inputRef={inputRef} />
      <button onClick={showValue}>Show Value</button>

      {value && <p> your text: {value}</p>}
    </div>
  );
}
