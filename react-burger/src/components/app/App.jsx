import AppHeader from '../app-header/app-header';
import { MainPage } from '../../pages/main-page';
import { Page404 } from '../../pages/page-404';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { LoginPage } from '../../pages/login-page';
import { RegistrationPage } from '../../pages/registration-page';
import { ResetPasswordPage } from '../../pages/reset-password';
import { ForgotPasswordPage } from '../../pages/forgot-password';
import { ProfilePage } from '../../pages/profile-page';
import { ProtectedRoute } from '../protected-route/protected-route';
import { UserInfo } from '../user-info/user-info';
import { Orders } from '../orders/orders';
export const App = () => {
  return (


    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path='/' element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
        <Route path='/login' element={<ProtectedRoute guest><LoginPage /> </ProtectedRoute>} />
        <Route path='/register' element={<ProtectedRoute guest><RegistrationPage /></ProtectedRoute>} />
        <Route path='/forgot-password' element={<ProtectedRoute guest><ForgotPasswordPage /> </ProtectedRoute>} />
        <Route path='/reset-password' element={<ProtectedRoute guest><ResetPasswordPage /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} >
          <Route path='' element={<UserInfo />} />
          <Route path='orders'  element={<Orders />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

