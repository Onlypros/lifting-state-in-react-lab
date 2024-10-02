import Ingredient from "./Ingredient";

const IngredientList = ({ingredients, handleAddIngredient}) => {
    return <ul>
        {ingredients.map((ingredient, index) => (
            <li key={index} style={{backgroundColor: ingredient.color}}>
                <Ingredient ingredient={ingredient} />
                <button onClick={() => handleAddIngredient(ingredient)} className="button">+</button>
            </li>
        ))}
    </ul>;
  };
  
  export default IngredientList;
  