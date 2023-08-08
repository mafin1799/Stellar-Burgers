import AppHeader from './app-header/app-header';
import { BurgerIngredients } from './burger-ingredients/burger-ingredients';
import React from 'react'
import { BurgerConstructor } from './burger-constructor/burger-constructor';
import styles from "../assets/styles.module.css"
import { getIngregientsData } from '../utils/burger-api';
import { IngredientsContext } from './services/appContext';

function App() {

  const [loading, setLoading] = React.useState(true);
  const [ingredients, setData] = React.useState(null);
  const [hasError, setHasError] = React.useState(false)


  React.useEffect(() => {
    try {
      getIngregientsData()
        .then(result => {
          setData(result.data);
          setLoading(false);
        })
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
          <div className={`${styles.row} ${styles.container} `} style={{ width: 'calc(100vw - 19.7% - 19.7% + 40px)', justifyContent: 'center' }}>
            <IngredientsContext.Provider value={ingredients}>
              <BurgerIngredients />
              <div className={styles.col} style={{ maxWidth: 40 }}></div>
              <BurgerConstructor />
            </IngredientsContext.Provider>
          </div>
        </>
      }
    </div>
  );
}

export default App;
