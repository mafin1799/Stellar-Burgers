import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import styles from '../assets/styles.module.css'
import { useDispatch, useSelector } from "../types/hooks";
import { sentAuthRequest } from "../services/actions/auth";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector(store => store.auth.authError);
    const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(sentAuthRequest(email, password, () => navigate('/')));
    }


    return (
        <div className={styles.centerHV}>
            <div className="text_type_main-medium">Вход</div>
            <form onSubmit={loginHandler}>
                <Input type={'email'} placeholder={'E-mail'} name="email" extraClass="pt-6" error={error} value={email} errorText={'Ошибка'} onChange={e => setEmail(e.target.value)} />
                <PasswordInput extraClass="pt-6" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <Button htmlType="submit" type="primary" size="large" extraClass="mt-6">Войти</Button>
            </form>


            <span className="mt-20 text_color_inactive text_type_main-default">
                Вы - новый пользователь?
                <Link className="ml-4 text_color_accent" to='/register'>
                    Зарегистрироваться
                </Link>
            </span>

            <span className="mt-6 text_color_inactive text_type_main-default">
                Забыли пароль?
                <Link className="ml-4 text_color_accent" to='/forgot-password'>
                    Восстановить пароль
                </Link>
            </span>
        </div>
    )
}