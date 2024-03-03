import React, { useState } from "react";
import "./App.css";
import "./styles/DarkMode.css";
import PetDropdown from "./components/PetDropdown";
import "@theme-toggles/react/css/Within.css";
import { Within } from "@theme-toggles/react";

function App() {
  // Setting up state for dark mode
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      document.body.classList.toggle("dark-mode", !prevMode);
      return !prevMode;
    });
  };

  return (
    <>
      <div className={`container ${darkMode ? "dark-mode" : ""}`}>
        <h1>Safe Snacks For Special Pets</h1>
        <div className="toggleContainer">
          <Within duration={750} onClickCapture={toggleDarkMode} />
        </div>
        <PetDropdown darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
