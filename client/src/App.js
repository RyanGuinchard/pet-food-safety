import React from "react";
import "./App.css";
import PetDropdown from "./components/PetDropdown";

function App() {
  return (
    <>
      <div className="container">
        <h1>Safe Snacks For Special Pets</h1>
        <PetDropdown/>
      </div>
    </>
  );
}

export default App;
