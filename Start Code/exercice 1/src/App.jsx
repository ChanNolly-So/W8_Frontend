import React , { useState } from "react";

export default function App() {
  
  const [score, setScore] = useState(0);

   const getScoreBarStyle = () => {

    // 1- Compute width
      const scoreWidth = `${score * 10}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
     if (score <= 3) scoreColor = "#f3bc47";    
    else if (score <= 6) scoreColor = "yellowgreen";
    else if (score <= 9) scoreColor = "lightgreen";
    else scoreColor = "green";

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={(e) => setScore(Number(e.target.value))}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
