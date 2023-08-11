import React, {useMemo} from "react";
import styles from "../../assets/styles.module.css";
import burgerStyles from '../../assets/burger-constructor/burger-constructor.module.css';
import { DragIcon, CurrencyIcon, Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { TopDown } from "./components/top-down";
import { OrderDetails } from "./components/order-details";
import { Modal } from '../modal/modal';
import { useDrop } from "react-dnd";
import { sentOrderRequest } from "../../services/actions/order";
import { useDispatch, useSelector } from "react-redux";
import { addBuns, addIngredient } from "../../services/actions/ingredients-constructor";


export const BurgerConstructor = () => {

    const dispatch = useDispatch();

    const ingredients = useSelector(store => store.ingredientsInfo.ingredients)
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
        if(_ingredients){
            _ingredients.forEach(item => {
                sum = sum + item.price
            });
        }
        if(_bun){
            sum = sum + _bun.price * 2
        } 
        return sum;
    },[_ingredients,_bun])

    const ingredientIds = _ingredients.map((elem) => (elem._id));

    const onOrder = () => {
        dispatch(sentOrderRequest(ingredientIds));
        openModal();
    }

    const [, dropTarget] = useDrop({
        accept: 'ingredients',
        drop(item) {
            if (item.type === 'bun') {
                /**
                 * Добавить 2 булки в контейнер
                 */
                dispatch(addBuns(item));
            } else {
                /**
                 * Добавление без ограничений
                 */
                if(_bun){
                    dispatch(addIngredient({ ...item, id: 555 }))
                }     
            }
        }
    })

    return (
        <div className={`${styles.col} ${burgerStyles.maxWidth}`}  ref={dropTarget}>
            <div className="mt-25">
            </div>
            {_bun && _ingredients ?


                <div>
                    <TopDown prop={_bun} >
                        <div className={` ${burgerStyles.container} custom-scroll`}>
                            {
                                _ingredients.map((element) => {
                                    return (
                                        <div key={element._id} className={`${styles.snapStart} ${styles.dFlex} ${styles.verticalCenter} pb-4`} >
                                            <span className="pr-2"><DragIcon /></span>

                                            <ConstructorElement thumbnail={element.image} price={element.price} text={element.name} />
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
