import AppHeader from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { useEffect } from 'react'
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import styles from "../../assets/styles.module.css"
import { useDispatch, useSelector } from "react-redux";
import { sentIngredientsRequest } from '../../services/actions/ingredients-data';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
export const App = () => {

  const dispatch = useDispatch();
  const loaded = useSelector(store => store.ingredientsInfo.ingredientsLoaded)
  useEffect(() => {
    dispatch(sentIngredientsRequest())
  }, [dispatch])

  return (
    <div>
      <AppHeader />
      <div className={`${styles.row} ${styles.container} ${styles.appCenter}`}>
        {loaded &&
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <div className={`${styles.col} ${styles.middleCol}`}></div>
            <BurgerConstructor />
          </DndProvider>
        }

      </div>
    </div>
  );
}

