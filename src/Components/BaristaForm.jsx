import React, { useState } from "react";
import RecipeChoices from "./RecipeChoices"; // Make sure the path matches where you save RecipeChoices.jsx
import drinksJson from "./drinks.json"

const BaristaForm = () => {
  // State variable for controlled inputs
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: ""
  });

  // Ingredients options
  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    blended: ["yes", "turbo", "no"]
  };

  // Placeholder functions for form actions
  const onCheckAnswer = () => {
    // Implementation for checking the answer
  };

  const onNewDrink = () => {
    // Implementation for generating a new drink
  };

  return (
    <div>
    <h2>Hi, I'd like to order a:</h2>
      <form>
        {/* Temperature choices */}
        <h3>Temperature</h3>
        <div className="answer-space">{inputs["temperature"]}</div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="temperature"
          choices={ingredients["temperature"]}
          checked={inputs["temperature"]}
        />
        {/* Syrup */}
        <h3>Syrup</h3>
        <div className="answer-space">{inputs["syrup"]}</div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="syrup"
          choices={ingredients["syrup"]}
          checked={inputs["syrup"]}
        />   
        {/* Milk choices */}
        <h3>Milk</h3>
        <div className="answer-space">{inputs["milk"]}</div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="milk"
          choices={ingredients["milk"]}
          checked={inputs["milk"]}
        />        

        {/* Blended*/}
        <h3>Blended</h3>
        <div className="answer-space">{inputs["blended"]}</div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="blended"
          choices={ingredients["blended"]}
          checked={inputs["blended"]}
        />     
        

        {/* Additional ingredient choices can be added here following the same pattern */}
        {/* We will fill this in soon! */}
      </form>

      <button type="submit" className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>
      <button
        type="button"
        className="button newdrink"
        onClick={onNewDrink}
      >
        New Drink
      </button>
    </div>
  );
};

export default BaristaForm;
