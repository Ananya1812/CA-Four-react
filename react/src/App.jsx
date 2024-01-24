import React, { useState } from "react";
import "./App.css"; // Import the stylesheet
import questions from "./questions"; // Import the questions data
import QuestionBox from "./components/QuestionBox"; // Import the QuestionBox component

function App() {
  // State to track the mode (light or dark)
  const [mode, setMode] = useState(false);

  // Function to handle button click and toggle mode
  const handleButton = () => {
    // Toggle the mode state
    setMode(!mode);

    // Change the body background color based on the mode
    document.body.style.backgroundColor = mode ? "#CAF0F8" : "#001D3D";
  };

  return (
    <div className={`main ${mode ? "light" : "dark"}`}>
      {/* Main container with dynamic class based on mode */}
      <div className="header">
        {/* Header section */}
        <h1>Quizify</h1>
        {/* Button to toggle mode */}
        <button onClick={handleButton} className="toggle">
          {/* Display text based on mode */}
          {mode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      {/* Render the QuestionBox component with questions data */}
      <QuestionBox data={questions} />
    </div>
  );
}

export default App;
