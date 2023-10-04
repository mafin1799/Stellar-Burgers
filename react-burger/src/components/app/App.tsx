import { AppHeader } from '../app-header/app-header';
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
import { IngredientPage } from '../../pages/ingredient';
import { useSelector, useDispatch } from '../../types/hooks';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../burger-ingredients/components/ingredient-details';
import { sentIngredientsRequest } from '../../services/actions/ingredients-data';
import { FeedPage } from '../../pages/feed';
import { ProfileOrders } from '../profile-orders/profile-orders';
import { OrderInfo } from '../order-info/order-info';
import { OrderFull } from '../../pages/full-order';
import { WS_CLOSED_AUTH, WS_START_AUTH } from '../../services/actions/ws-auth';
import { WS_CLOSED, WS_START } from '../../services/actions/ws';


export const App = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(store => store.getUserInfo.user)

  useEffect(() => {
    dispatch(sentIngredientsRequest())
  }, [dispatch])

  const navigate = useNavigate();

  function close() {
    navigate(-1);
  }

  const location = useLocation();
  const background = location.state && location.state.background;


  const Orders = useSelector((store) => store.wsOrders.orders);
  const AuthOrders = useSelector((store) => store.currentOrder.orders);

  console.log(location)
  const ingredients = useSelector(store => store.ingredientsInfo.ingredients);
  return (
    <>
      <AppHeader />
      {!ingredients && userInfo ? <p>Загрузка</p>
        : <Routes location={background || location}>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<ProtectedRoute guest><div><LoginPage /></div></ProtectedRoute>} />

          <Route path='/profile' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} >
            <Route path='' element={<UserInfo />} />
            <Route path="orders" element={<ProfileOrders reverse path={'/profile/orders'} />} />
          </Route>
          <Route path="/profile/orders/:id" element={
            <ProtectedRoute>
              <OrderFull start={WS_START_AUTH} close={WS_CLOSED_AUTH} data={AuthOrders!} />
            </ProtectedRoute>} />

          <Route path='/register' element={<ProtectedRoute guest><div><RegistrationPage /></div></ProtectedRoute>} />
          <Route path='/forgot-password' element={<ProtectedRoute guest><div><ForgotPasswordPage /></div></ProtectedRoute>} />
          <Route path='/reset-password' element={<ProtectedRoute guest><div><ResetPasswordPage /></div></ProtectedRoute>} />
          <Route path='/ingredients/:id' element={<IngredientPage />} />
          <Route path="/feed" element={<FeedPage path='/feed' />} />
          <Route path="/feed/:id" element={<OrderFull start={WS_START} close={WS_CLOSED} data={Orders!} />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      }

      {ingredients && background &&
        <Routes>
          <Route path="/ingredients/:id" element={<Modal onClose={close} title={'Детали ингредиента'}><IngredientDetails data={ingredients} /> </Modal>} />
        </Routes>
      }
      {Orders && background &&
        <Routes>
          <Route path="/feed/:id" element={<Modal onClose={close}><OrderInfo modal data={Orders} /></Modal>} />
        </Routes>
      }
      {AuthOrders && background &&
        <Routes>
          <Route path='/profile/orders/:id' element={<Modal onClose={close}><OrderInfo modal data={AuthOrders} /></Modal>} />
        </Routes>
      }
    </>
  );
}

