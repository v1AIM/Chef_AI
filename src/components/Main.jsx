import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientsList";
import { getRecipeFromMistral } from "../../ai";

// This code uses react version 18.3.1
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState(false);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(event) {
    event.preventDefault(); // Prevents the form from reloading the page
    const formData = new FormData(event.target); // Use event.target to get the form
    const newIngredient = formData.get("ingredient");

    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      event.target.reset(); // Clears the input field
    }
  }

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}

// React version 19 Code
// import React from "react";
// import ClaudeRecipe from "./ClaudeRecipe";
// import IngredientList from "./IngredientsList";
// import { getRecipeFromMistral } from "../../ai";

// export default function Main() {
//   const [ingredients, setIngredients] = React.useState([]);

//   const [recipe, setRecipe] = React.useState(false);

//   async function getRecipe() {
//     const recipeMarkdown = await getRecipeFromMistral(ingredients);
//     setRecipe(recipeMarkdown);
//   }

//   function addIngriedient(formData) {
//     const newIngredient = formData.get("ingredient");
//     console.log(ingredients);

//     setIngredients((prevIngriedents) => [...prevIngriedents, newIngredient]);
//   }
//   return (
//     <main>
//       <form action={addIngriedient} className="add-ingredient-form">
//         <input
//           type="text"
//           placeholder="e.g. oregano"
//           aria-label="Add ingredient"
//           name="ingredient"
//         />
//         <button>Add Ingredient</button>
//       </form>
//       {ingredients.length > 0 && (
//         <IngredientList ingredients={ingredients} getRecipe={getRecipe} />
//       )}
//       {recipe && <ClaudeRecipe recipe={recipe} />}
//     </main>
//   );
// }
