import React, { useState } from "react";
import "./App.css";

function Mycal() {
  const minHeight = 100;
  const minWeight = 70;
  const [height, setHeight] = useState(156);
  const [weight, setWeight] = useState(76);
  const [bmi, setBmi] = useState(20.9);
  const [size, setSize] = useState("Normal Weight");
  const [color, setColor] = useState('yellow')





  function handleHeight(e) {
    setHeight(e.target.value);
    handleCalculator();
  }

  function handleWeight(e) {
    setWeight(e.target.value);
    handleCalculator();
  }

  function handleCalculator() {
    let isWeightGreater = weight >= minWeight;
    let isHeightGreater = height >= minHeight;
    if (isWeightGreater && isHeightGreater) {
      let result;
      result = weight / Math.pow(height / 100, 2);
      setBmi(result);
      handlesize(result)
    }
  }

  function handlesize(result) {
    if (result < 18.5) {
      setSize("Underweight ");
      setColor("yellow");
    } else if (result >= 18.5 && result <= 24.9) {
      setSize("Normal Weight");
      setColor("blue");
    } else if (result >= 25 && result <= 29.9) {
      setSize("Overweight");
      setColor ("green");
    } else if (result >= 30) {
      setSize("Obesity");
      setColor("red");
    }
  }

  function handleClick() {
    setHeight(156);
    setWeight(76);
  }

 

  return (
    <div className="body">
      <div className="main">
        <div className="header">
          <h2>MY BMI Healthy Weight Cal</h2>
        </div>
        <p>Body Mass Index (BMI) = {bmi}</p>
        <p style={{color: color}}> {size}</p>

        <div className="parameter-input">
          <h4 className="parameter-title">Height (cm)</h4>
          <input onChange={handleHeight} value={height} />
        </div>
        <div className="parameter-input">
          <h4 className="parameter-title">Weight (Kg)</h4>
          <input onChange={handleWeight} value={weight} />
        </div>

        {/* <h4>Height (cm)</h4>
        <h4>Weight (kg)</h4> */}

        <button onClick={handleClick}>
          <p>RESET</p>
        </button>
      </div>
    </div>
  );
}

export default Mycal;
