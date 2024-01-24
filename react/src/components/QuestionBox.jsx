import { useState } from "react";
import "./Style.css";
import Result from "./Result";

function QuestionBox(props) {
  // State variables
  const [number, setNumber] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const [score, setScore] = useState(0);

  // Handler for option click
  const handleClick = (e) => {
    setNumber(number + 1);
    setHighlight(false);
    // Check if the clicked option is correct and update the score
    if (e.target.getAttribute("istrue") === "true") {
      setScore(score + 1);
    }
  };

  // Function to highlight the text in red without toggling back
  const highlightText = () => {
    setHighlight(true);
  };

  // Function to remove the highlight and allow it to toggle back
  const removeHighlight = () => {
    setHighlight(false);
  };

  // Handler to reset the state variables
  const reset = () => {
    setNumber(0);
    setHighlight(false);
    setScore(0);
  };

  // Dynamic information based on the question number
  let information;
  if (number < 5) {
    // Determine the class for highlighting question text
    const questionClass = highlight ? "highlighted" : "";
    information = (
      <div className="container">
        <div className="indicator">
          <span className="indicator-text">Question: {number + 1} of 5</span>
        </div>
        <div className="question">
          <h2 className={questionClass}>{props.data[number].text}</h2>
        </div>
        <div className="options-container">
          {/* Mapping through options and rendering them */}
          {props.data[number].options.map((option, index) => (
            <p
              key={index}
              className="option"
              onClick={handleClick}
              istrue={`${option.isCorrect}`}
            >
              {option.text}
            </p>
          ))}
        </div>
        {/* Buttons for highlighting or removing highlight */}
        <div className="highlight-buttons">
          <div
            className="highlight"
            onClick={highlightText}
            role="button"
            tabIndex={0}
          >
            Highlight
          </div>
          <div
            className="remove-highlight"
            onClick={removeHighlight}
            role="button"
            tabIndex={0}
          >
            Remove Highlight
          </div>
        </div>
      </div>
    );
  } else {
    // Display result component when all questions are answered
    information = <Result score={score} reset={reset} />;
  }

  return <div>{information}</div>;
}

export default QuestionBox;
