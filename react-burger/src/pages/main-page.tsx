import { BurgerIngredients } from '../components/burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../components/burger-constructor/burger-constructor';
import styles from "../assets/styles.module.css"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "../types/hooks";

export const MainPage = () => {
   
    const loaded = useSelector(store => store.ingredientsInfo.ingredientsLoaded)
    
    return(
        <div className={`${styles.row} ${styles.container} ${styles.appCenter}`}>
        {loaded &&
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <div className={`${styles.col} ${styles.middleCol}`}></div>
            <BurgerConstructor />
          </DndProvider>
        }

      </div>
    )
}