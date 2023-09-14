import AppHeader from '../app-header/app-header';
import { MainPage } from '../../pages/main-page';
import { Page404 } from '../../pages/page-404';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react'
import { LoginPage } from '../../pages/login-page';
import { RegistrationPage } from '../../pages/registration-page';
import { ResetPasswordPage } from '../../pages/reset-password';
import { ForgotPasswordPage } from '../../pages/forgot-password';
import { ProfilePage } from '../../pages/profile-page';
import { ProtectedRoute } from '../protected-route/protected-route';
import { UserInfo } from '../user-info/user-info';
import { Orders } from '../orders/orders';
import { IngredientPage } from '../../pages/ingredient';
import { useSelector, useDispatch } from '../../types/hooks';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../burger-ingredients/components/ingredient-details';
import { sentIngredientsRequest } from '../../services/actions/ingredients-data';
import { deleteIngredientDetails } from "../../services/actions/ingredient-details";


export const App = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(store => store.getUserInfo.user)
  useEffect(() => {
    dispatch(sentIngredientsRequest())
  }, [dispatch])
  const navigate = useNavigate();
  function close() {
    navigate(-1);
    dispatch(deleteIngredientDetails)
  }
  const location = useLocation();
  const background = location.state && location.state.background;

  const ingredients = useSelector(store => store.ingredientsInfo.ingredients);
  return (
    <>
      <AppHeader />
      {!ingredients && userInfo ? <p>Загрузка</p>
        : <Routes location={background || location}>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<ProtectedRoute guest><LoginPage /> </ProtectedRoute>} />
          <Route path='/register' element={<ProtectedRoute guest><RegistrationPage /></ProtectedRoute>} />
          <Route path='/forgot-password' element={<ProtectedRoute guest><ForgotPasswordPage /> </ProtectedRoute>} />
          <Route path='/reset-password' element={<ProtectedRoute guest><ResetPasswordPage /></ProtectedRoute>} />
          <Route path='/ingredients/:id' element={<IngredientPage />} />
          <Route path='/profile' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} >
            <Route path='' element={<UserInfo />} />
            <Route path='orders' element={<Orders />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      }

      {ingredients && background &&
        <Routes>
          <Route path="/ingredients/:id" element={<Modal onClose={close} title={'Детали ингредиента'}> <IngredientDetails data={ingredients} /></Modal>} />
        </Routes>
      }
    </>
  );
}

