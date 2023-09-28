import { useEffect, useState } from 'react'
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../types/hooks";
import { sentGetUserInfo } from '../../services/actions/get-user-info';
import { checkToken } from '../../utils/check-access';
import { sentRefreshRequest } from '../../services/actions/refresh';
import { sentSetUserInfo } from '../../services/actions/set-user-info';

export const UserInfo = () => {


    const [editEmail, setEditEmail] = useState(true)
    const [editName, setEditName] = useState(true)

    const refresh = useSelector(store => store.refresh.refreshSuccess)

    const userInfo = useSelector(store => store.getUserInfo.user)
    const userInfoSuccess = useSelector(store => store.getUserInfo.userSuccess)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const dispatch = useDispatch();

    useEffect(() => {
        if (checkToken()) {

            dispatch(sentGetUserInfo())
        } else {

            dispatch(sentRefreshRequest())
        }
        if (refresh) {
            dispatch(sentGetUserInfo())
        }
        if (userInfoSuccess && userInfo) {
            setEmail(userInfo.email)
            setName(userInfo.name)
        }

    }, [refresh, userInfoSuccess])

    const submitUserInfo = () => {

        dispatch(sentSetUserInfo(email, name, password))
    }

    const reset = () => {
        if (userInfo) {
            setEmail(userInfo.email)
            setName(userInfo.name)
            setPassword('')
        }

    }
    return (

        <div className="col pt-30 pl-15">
            {userInfo &&
                <>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        value={name}
                        onIconClick={() => setEditName(!editName)}
                        extraClass="pt-6 " 
                        icon={'EditIcon'}
                        onChange={e => setName(e.target.value)} />

                    <Input
                        type={'email'}
                        value={email}
                        placeholder={'E-mail'}
                        onIconClick={() => setEditEmail(!editEmail)}
                        extraClass="pt-6  "
                        icon={'EditIcon'}
                        onChange={e => setEmail(e.target.value)} />

                    <PasswordInput
                        value={password}

                        extraClass="pt-6  "
                        onChange={e => setPassword(e.target.value)} />

                    <div className='row pt-6 pb-15 fit-content'>
                        <Button type="secondary" htmlType="reset" onClick={reset}>Отмена</Button>
                        <Button type="primary" htmlType="button" onClick={submitUserInfo}>Сохранить</Button>
                    </div>
                </>


            }
        </div>

    )
}