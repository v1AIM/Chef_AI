export default function IngredientList(props) {
  const ingredientsListItem = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <>
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsListItem}
        </ul>
        {props.ingredients.length > 3 && (
          <div className="get-recipe-container">
            <div ref={props.reff}>
              <h3>Ready for recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.getRecipe}>Get a recipe</button>
          </div>
        )}
      </section>
    </>
  );
}
