import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data/index";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // Adding Element
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
    // console.log(newFood);
  }

  // function handleLiClick(id) {
  //   const newFoodArray = foods.map((food) => {
  //     if (food.id === id) {
  //       return {
  //         ...food,
  //         heatLevel: food.heatLevel + 1,
  //       };
  //     } else {
  //       return food;
  //     }
  //   });
  //   setFoods(newFoodArray);
  // }

  // Removing Element
  function handleLiClick(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }

  //select button
  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value)
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;