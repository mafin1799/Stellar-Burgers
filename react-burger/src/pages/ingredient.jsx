import { useSelector } from "react-redux";
import { IngredientDetails } from "../components/burger-ingredients/components/ingredient-details";

export const IngredientPage = () => {
    const loaded = useSelector(store => store.ingredientsInfo.ingredients)
    return(
        <div className="centerHV">
        {loaded && <IngredientDetails data={loaded}/>}
        </div>
    )
}