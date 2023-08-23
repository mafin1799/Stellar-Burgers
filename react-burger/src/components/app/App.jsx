import AppHeader from '../app-header/app-header';
import { MainPage } from '../../pages/main-page';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (


    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

