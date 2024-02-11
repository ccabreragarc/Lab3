import React, { useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";
import BeansImage from '../Resources/Beans.png';



const BaristaForm = () => {
  // Existing state variables
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: ""
  });

  const [currentDrink, setCurrentDrink] = useState('');
  const [trueRecipe, setTrueRecipe] = useState({});

  // New state variables for correctness
  const [correct_temp, setCheckedTemperature] = useState('');
  const [correct_syrup, setCheckedSyrup] = useState('');
  const [correct_milk, setCheckedMilk] = useState('');
  const [correct_blended, setCheckedBlended] = useState('');

  // Ingredients options remain unchanged
  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    blended: ["yes", "turbo", "no"]
  };

  const onCheckAnswer = () => {
    // Check temperature
    if (trueRecipe.temp !== inputs['temperature']) {
      setCheckedTemperature('wrong');
    } else {
      setCheckedTemperature("correct");
    }
    // Check syrup
    if (trueRecipe.syrup !== inputs['syrup']) {
      setCheckedSyrup('wrong');
    } else {
      setCheckedSyrup("correct");
    }
    // Check milk
    if (trueRecipe.milk !== inputs['milk']) {
      setCheckedMilk('wrong');
    } else {
      setCheckedMilk("correct");
    }
    // Check blended
    if (trueRecipe.blended !== inputs['blended']) {
      setCheckedBlended('wrong');
    } else {
      setCheckedBlended("correct");
    }
  };

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);

    // Reset correctness state variables
    setCheckedTemperature('');
    setCheckedSyrup('');
    setCheckedMilk('');
    setCheckedBlended('');
  };

  const onNewDrink = () => {
    setInputs({
      temperature: '',
      milk: '',
      syrup: '',
      blended: ''
    });
    getNextDrink();
  };

  return (
    <div>
      <div className="title-container">
      <img src={BeansImage} alt="Coffee Beans" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
        <h1 className="title">On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <h2 className="center-text">Hi, I'd like to order a:</h2>
      {/* Render the current drink */}
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button
          type="button" // Corrected type
          className="button new-drink" // Corrected className to follow naming convention
          onClick={onNewDrink}
        >
          🔄
        </button>
      </div>
      <form className="container">
        <div className="mini-container">
          <h3 className="center-text">Temperature</h3>
          <div className="answer-space" id={correct_temp}>
            {inputs["temperature"]}
          </div>
          <RecipeChoices
            handleChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            label="temperature"
            choices={ingredients["temperature"]}
            currentVal={inputs["temperature"]}
          />
        </div>
        {/* Syrup */}
        <div className="mini-container">
        <h3 className="center-text">Syrup</h3>
          <div className="answer-space" id={correct_temp}>
            {inputs["syrup"]}
          </div>
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
        </div>
        {/* Milk choices */}
        <div className="mini-container">
        <h3 className="center-text">Milk</h3>
          <div className="answer-space" id={correct_temp}>
            {inputs["milk"]}
          </div>
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
        </div>
        {/* Blended */}
        <div className="mini-container">
        <h3 className="center-text">Blended</h3>
          <div className="answer-space" id={correct_temp}>
            {inputs["blended"]}
          </div>
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
        </div>
        {/* Additional ingredient choices can be added here */}
      </form>
      {/* Buttons for checking answer and getting a new drink */}
      <button type="submit" className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>
    </div>
  );
};

export default BaristaForm;
