import React, { useState } from "react";
import "./App.css";
import "./styles/DarkMode.css";
import PetDropdown from "./components/PetDropdown";

function App() {
  // Setting up state for dark mode
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      document.body.classList.toggle('dark-mode', !prevMode);
      return !prevMode;
    });
  };
  

  return (
    <>
      <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
        <h1>Safe Snacks For Special Pets</h1>
        <PetDropdown darkMode={darkMode} />
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </>
  );
}

export default App;
