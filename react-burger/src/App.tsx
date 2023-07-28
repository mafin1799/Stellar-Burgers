import AppHeader from './components/app-header/app-header';
import { BurgerIngredients } from './components/burger-ingredients/burger-ingredients';


function App() {
  return (
    <div className='mx-5'>
      <AppHeader />

      <div className='row'>
        <BurgerIngredients />
      </div>
    </div>
  );
}

export default App;
