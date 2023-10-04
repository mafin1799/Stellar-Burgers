import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import styles from '../assets/styles.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "../types/hooks";
import { sentRegister } from "../services/actions/register";
export const RegistrationPage = () => {
    const navigate = useNavigate();
    const succesReg = useSelector(store => store.register.regSuccess)
    const errorReg = useSelector(store => store.register.regError)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')

    const dispatch = useDispatch()
    const onRegister = () => {
        dispatch(sentRegister(name, email, password));
    }

    useEffect(() => {
        if (succesReg) {
            navigate('/')
        } else if (errorReg) {

        }
    })
    return (
        <div className={styles.centerHV}>
            <div className="text_type_main-medium">Регистрация</div>
            <Input type={'text'} placeholder={'Имя'} value={name} error={errorReg} extraClass="pt-6" onChange={e => setName(e.target.value)} />
            <Input type={'email'} value={email} placeholder={'E-mail'} error={errorReg} extraClass="pt-6" onChange={e => setEmail(e.target.value)} />
            <Input type={'password'} value={password} placeholder={'Пароль'} error={errorReg} extraClass="pt-6" icon="ShowIcon" onChange={e => setPassword(e.target.value)} />
            <Button htmlType="button" type="primary" size="large" extraClass="mt-6" onClick={onRegister}>Зарегистрироваться</Button>

            <span className="mt-20 text_color_inactive text_type_main-default">
                Уже зарегистрированы
                <Link className="ml-4 text_color_accent" to='/login'>
                    Войти
                </Link>
            </span>
        </div>
    )
}