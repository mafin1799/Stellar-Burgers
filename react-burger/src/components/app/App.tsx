import AppHeader from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import React from 'react'
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import styles from "../../assets/styles.module.css"
import { getIngregientsData } from '../../utils/burger-api';
import { IngredientsContext } from '../services/appContext';

function App() {

  const [loading, setLoading] = React.useState(true);
  const [ingredients, setIngredients] = React.useState(null);
  const [hasError, setHasError] = React.useState(false)


  React.useEffect(() => {
    try {
      getIngregientsData()
        .then(result => {
          setIngredients(result.data);
         
        })
        .finally(() => setLoading(false))
    } catch (error) {
      setHasError(true)
    }
  }, [])

  return (
    <div>
      {
        !loading && !hasError && ingredients &&
        <>
          <AppHeader />
          <div className={`${styles.row} ${styles.container} ${styles.appCenter}`}>
            <IngredientsContext.Provider value={ingredients}>
              <BurgerIngredients />
              <div className={`${styles.col} ${styles.middleCol}`}></div>
              <BurgerConstructor />
            </IngredientsContext.Provider>
          </div>
        </>
      }
    </div>
  );
}

export default App;
