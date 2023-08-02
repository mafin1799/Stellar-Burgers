import AppHeader from './components/app-header/app-header';
import { BurgerIngredients } from './components/burger-ingredients/burger-ingredients';
import React from 'react'
import { BurgerConstructor } from './components/burger-constructor/burger-constructor';
import styles from "./assets/styles.module.css"
function App() {

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    try {
      const getProductData = async () => {
        setLoading(true);
        const response = await fetch('https://norma.nomoreparties.space/api/ingredients');
        const result = await response.json()
        setData(result.data)
        setLoading(false);
      }
      getProductData()
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <div className='ml-10 mr-10'>
      {
        !loading && data &&
        <>
          <AppHeader />
          <div className={`${styles.row} ${styles.container} `} style={{width: 'calc(100vw - 19.7% - 19.7% + 40px)', justifyContent: 'center'}}>
            <BurgerIngredients ingredients={data} />
            <div className={styles.col} style={{maxWidth: 40}}></div>
            <BurgerConstructor ingredients={data} />
          </div>
        </>
      }
    </div>
  );
}

export default App;
