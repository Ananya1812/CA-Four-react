import React from "react";
import "./Style.css";

// Functional component to display the result
function Result(props) {
  // Handler for replay button click
  const handleClick = () => {
    props.reset();
  };

  return (
    <div className="container">
      {/* Displaying the result score */}
      <h2>Your Result :</h2>
      <h2>
        {props.score} out of 5 correct - {(props.score / 5) * 100}%
      </h2>
      {/* Replay button to play again */}
      <button onClick={handleClick} className="replay">
        Play Again
      </button>
    </div>
  );
}

export default Result;
