import React, { useMemo } from "react";
import uuid from 'react-uuid';
import styles from "../../assets/styles.module.css";
import burgerStyles from '../../assets/burger-constructor/burger-constructor.module.css';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { TopDown } from "./components/top-down";
import { OrderDetails } from "./components/order-details";
import { Modal } from '../modal/modal';
import { useDrop } from "react-dnd";
import { sentOrderRequest } from "../../services/actions/order";
import { useDispatch, useSelector } from "react-redux";
import { addBuns, addIngredient, deleteAll } from "../../services/actions/ingredients-constructor";
import { DraggableElement } from "./components/constructor-element";




export const BurgerConstructor = () => {

    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = React.useState(false)

    const _ingredients = useSelector(store => store.ingredientsConstructor.ingredients)
    const _bun = useSelector(store => store.ingredientsConstructor.bun)



    const openModal = () => {
        if (!window.getSelection().toString()) {
            setModalVisible(true)
        }
    }
    const closeModal = () => {
        setModalVisible(false);
    }


    const totalCount = useMemo(() => {
        let sum = 0;
        if (_ingredients) {
            _ingredients.forEach(item => {
                sum = sum + item.price
            });
        }
        if (_bun) {
            sum = sum + _bun.price * 2
        }
        return sum;
    }, [_ingredients, _bun])

    const ingredientIds = _ingredients.map((elem) => (elem._id));

    const onOrder = () => {
        dispatch(sentOrderRequest(ingredientIds));
        dispatch(deleteAll())
        openModal();
    }

    const [, dropTarget] = useDrop({
        accept: 'ingredients',
        drop(item) {
            if (item.type === 'bun') {
                dispatch(addBuns(item));
            } else if (_bun) {
                dispatch(addIngredient({ ...item, id: uuid() }))
            }
        }

    })

    return (
        <div className={`${styles.col} ${burgerStyles.maxWidth}`} ref={dropTarget}>
            <div className="mt-25">
            </div>
            {_bun && _ingredients ?
                <div>
                    <TopDown prop={_bun} >
                        <div className={` ${burgerStyles.container} custom-scroll`}>
                            {
                                _ingredients.map((element) => {
                                    return (
                                        <div key={uuid()}>
                                            <DraggableElement data={element} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </TopDown>
                    <div className={`pt-4 ${styles.row}`}>
                        <div className={`text_type_digits-medium ${burgerStyles.ml35}`}>
                            <span >
                                {totalCount} <CurrencyIcon />
                            </span>
                        </div>
                        <div className={burgerStyles.mlAuto}>
                            <Button type="primary" htmlType="button" onClick={onOrder}>
                                Оформить заказ
                            </Button>
                        </div>
                    </div>
                </div>
                :
                <>
                    <h1>Возьми булку</h1>
                </>}
            {modalVisible &&
                <Modal onClose={closeModal}>
                    <OrderDetails />
                </Modal>
            }

        </div>
    )
}
