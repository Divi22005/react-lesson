import React, { useRef, useState } from "react";

export default function App15() {
  const nameRef = useRef();
  const num1Ref = useRef();
  const num2Ref = useRef();
  const colorRef = useRef();
  
  const [sum, setSum] = useState(null);
  const [color, setColor] = useState("");
  const [nameColor, setNameColor] = useState("");

  const handleNameSubmit = () => {
    alert(nameRef.current.value || "No name entered");
    nameRef.current.style.color = "blue";
    setNameColor("blue");
  };

  const handleSumSubmit = () => {
    const n1 = parseInt(num1Ref.current.value) || 0;
    const n2 = parseInt(num2Ref.current.value) || 0;
    setSum(n1 + n2);
  };

  const handleColorSubmit = () => {
    setColor(colorRef.current.value);
  };

  return (
    <div>
      <h1>App15</h1>
      <h2>useRef hook - to create uncontrolled component</h2>
      
      {/* Name input and submit */}
      <p>
        <input 
          type="text" 
          ref={nameRef} 
          placeholder="Enter your name" 
        />
      </p>
      <button onClick={handleNameSubmit}>Submit</button>
      <hr />
      
      {/* Sum inputs and submit */}
      <input 
        type="number" 
        ref={num1Ref} 
        placeholder="Num 1" 
        style={{ border: "3px solid black", width: "50px", textAlign: "center" }} 
      />
      <input 
        type="number" 
        ref={num2Ref} 
        placeholder="Num 2" 
        style={{ border: "3px solid black", width: "50px", textAlign: "center", marginLeft: "5px" }} 
      />
      <button onClick={handleSumSubmit} style={{ border: "3px solid black", marginLeft: "5px", fontWeight: "bold" }}>
        Submit
      </button>
      <div style={{ fontWeight: "bold", fontSize: "20px", marginTop: "5px" }}>{sum !== null && sum}</div>
      <hr />
      
      {/* Color input and submit */}
      <input
        type="text"
        ref={colorRef}
        placeholder="Color"
        style={{ border: "3px solid black", fontWeight: "bold", width: "100px" }}
      />
      <button
        onClick={handleColorSubmit}
        style={{
          border: "3px solid black",
          marginLeft: "5px",
          fontWeight: "bold",
          borderRadius: "10px",
          padding: "2px 10px",
        }}
      >
        Submit
      </button>
      {color && (
        <h3 style={{ color: color, fontWeight: "bold", marginTop: "10px" }}>
          Hello world
        </h3>
      )}
    </div>
  );
}