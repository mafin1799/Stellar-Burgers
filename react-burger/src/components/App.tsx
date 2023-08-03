import AppHeader from './app-header/app-header';
import { BurgerIngredients } from './burger-ingredients/burger-ingredients';
import React from 'react'
import { BurgerConstructor } from './burger-constructor/burger-constructor';
import styles from "../assets/styles.module.css"
import { getIngregientsData } from '../utils/burger-api';


function App() {

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
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
        !loading && !hasError && data &&
        <>
          <AppHeader />
          <div className={`${styles.row} ${styles.container} `} style={{ width: 'calc(100vw - 19.7% - 19.7% + 40px)', justifyContent: 'center' }}>
            <BurgerIngredients ingredients={data} />
            <div className={styles.col} style={{ maxWidth: 40 }}></div>
            <BurgerConstructor ingredients={data} />
          </div>
        </>
      }
    </div>
  );
}

export default App;
