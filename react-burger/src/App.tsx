import AppHeader from './components/app-header/app-header';
import { BurgerIngredients } from './components/burger-ingredients/burger-ingredients';
import React from 'react'
import { groupDataByType } from './utils/groupDataByType';
import { BurgerConstructor } from './components/burger-constructor/burger-constructor';
function App() {

  const [data, setData] = React.useState({});
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    
    try {
      fetch('https://norma.nomoreparties.space/api/ingredients')
        .then(response => response.json())
        .then(result => {
          console.log(result)
          setDone(true)
          setData((result.data))
        })

    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <div className='ml-10 mr-10'>
      {
        done && <>
          <AppHeader />
          <div className='row'>
            <BurgerIngredients ingredients={data} />
            <BurgerConstructor ingredients={data}/>
          </div></>
      }

    </div>
  );
}

export default App;
