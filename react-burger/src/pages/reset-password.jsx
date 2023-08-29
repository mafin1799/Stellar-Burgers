import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import styles from '../assets/styles.module.css'
import { useDispatch, useSelector } from "react-redux";
import { sentPasswordResetResetRequest } from "../services/actions/reset-password";
export const ResetPasswordPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loaded = useSelector(store => store.resetPassword.resetSuccess)
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const onReset = () => {
        dispatch(sentPasswordResetResetRequest(password, code))

    }

    useEffect(() => {
        if (!localStorage.getItem('forgotVisited')) {
            navigate('/forgot-password');
        }
        if (loaded) {
            navigate('/login');
            localStorage.removeItem('forgotVisited')
        }
    }, [loaded])
    return (
        <div className={styles.centerHV}>
            <div className="text_type_main-medium">Восстановление пароля</div>

            <Input type={'password'} value={password} placeholder={'Введите новый пароль'} onChange={e => setPassword(e.target.value)} extraClass="pt-6" />
            <Input type={'text'} value={code} placeholder={'Введите код из письма'} onChange={e => setCode(e.target.value)} extraClass="pt-6" />

            <Button htmlType="button" type="primary" size="large" extraClass="mt-6" onClick={onReset}>Сохранить</Button>

            <span className="mt-20 text_color_inactive text_type_main-default">
                Вспомнили пароль
                <Link className="ml-4 text_color_accent" to='/login'>
                    Войти
                </Link>
            </span>
        </div>
    )
}