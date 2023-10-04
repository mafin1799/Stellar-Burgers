import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import styles from '../assets/styles.module.css';
import { validate } from "../utils/validation";
import { useDispatch, useSelector } from "../types/hooks";
import { sentPasswordResetRequest } from "../services/actions/forgot-password";

export const ForgotPasswordPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const succesSend = useSelector(store => store.forgotPassword.forgotSuccess)
    const dispatch = useDispatch();

    const onReset = () => {
        if (email && validate(email)) {
            dispatch(sentPasswordResetRequest(email));
        }
    }
    const handleEmailChange = (e: React.FormEvent<EventTarget>) => { 
        const target = e.target as HTMLInputElement;
        setEmail(target.value) 
    }
    useEffect(() => {
        if (succesSend) {
            navigate('/reset-password')
            localStorage.setItem('forgotVisited', 'true')
        }
    }, [succesSend])
    return (
        <div className={styles.centerHV}>
            <div className="text_type_main-medium">Восстановление пароля</div>
            <EmailInput value={email} onChange={handleEmailChange} placeholder={'Укажите E-mail'} extraClass="pt-6" />
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