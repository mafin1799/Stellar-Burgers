import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import styles from '../assets/styles.module.css'
import { getPasswordReset } from "../utils/burger-api";
import { useDispatch, useSelector } from "react-redux";
import { sentPasswordResetRequest } from "../services/actions/forgot-password";
export const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const succesSend = useSelector(store => store.forgotPassword.forgotSuccess)
    const dispatch = useDispatch();
    
    const onReset = () => {
        dispatch(sentPasswordResetRequest(email));
    }

    useEffect(() => {
        if (succesSend) {
            navigate('/reset-password')
        }
    }, [succesSend])
    return (
        <div className={styles.centerHV}>
            <div className="text_type_main-medium">Восстановление пароля</div>

            <Input type={'email'} value={email} onChange={e => setEmail(e.target.value)} placeholder={'Укажите E-mail'} extraClass="pt-6" />

            <Button htmlType="button" type="primary" size="large" extraClass="mt-6" onClick={onReset}>Восстановить</Button>

            <span className="mt-20 text_color_inactive text_type_main-default">
                Вспомнили пароль
                <Link className="ml-4 text_color_accent" to='/login'>
                    Войти
                </Link>
            </span>
        </div>
    )
}