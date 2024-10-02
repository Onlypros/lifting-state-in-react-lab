import Ingredient from "./Ingredient";

const BurgerStack = ({stack, handleRemoveIngredient}) => {
    return (
    <>
        { stack.length ? <ul>
            {stack.map((ingredient, index) => (
                <li key={index} style={{backgroundColor: ingredient.color}}>
                <Ingredient ingredient={ingredient} />
                <button onClick={() => handleRemoveIngredient(ingredient)} className="button">X</button>
            </li>
            ))}
        </ul>: 
        <p>No Ingredients</p>
        }
    </>
  )};
  
  export default BurgerStack;
  