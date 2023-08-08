import PropTypes, { element } from 'prop-types';
import React from "react";
import styles from "../../assets/styles.module.css";
import burgerStyles from '../../assets/burger-constructor/burger-constructor.module.css';
import { DragIcon, CurrencyIcon, Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { TopDown } from "./components/top-down";
import { propDefinition } from "../../utils/propDefenitions";
import { OrderDetails } from "./components/order-details";
import { propStub } from "./components/prop";
import { Modal } from '../modal/modal';
import { getOrderData } from '../../utils/burger-api';
import { IngredientsContext } from '../services/appContext';
export const BurgerConstructor = () => {
    const [modalVisible, setModalVisible] = React.useState(false)
    const [hasBun, setHasBun] = React.useState(false);

    const ingredients = React.useContext(IngredientsContext)
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState(null);
    const [hasError, setHasError] = React.useState(false)


    const openModal = () => {
        if (!window.getSelection().toString()) {
            setModalVisible(true)
        }
    }
    const closeModal = () => {
        setModalVisible(false);
    }

    let ingredientsId = [];

    ingredients.map((elem) => {
        ingredientsId.push(elem._id)
    })

    React.useEffect(() => {
        try {
            getOrderData(ingredientsId)
            .then(result => {
              setData(result);
              setLoading(false);
            })
        } catch (error) {
          setHasError(true)
        }
      }, [modalVisible])


    let sum = (propStub.price * 2);
    return (
        <div className={`${styles.col} ${burgerStyles.maxWidth}`}>
            <div className="mt-25">
            </div>
            <TopDown prop={propStub}>
                <div className={` ${burgerStyles.container} custom-scroll`}>
                    {
                        ingredients.map((element) => {
                            if (element.type === 'bun' && hasBun) {
                                return null;
                            }
                            if (element.type === 'bun') {
                                setHasBun(true)
                            }
                            {sum = sum + element.price}
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
                        {sum} <CurrencyIcon />
                    </span>
                </div>
                <div className={burgerStyles.mlAuto}>
                    <Button type="primary" htmlType="button" onClick={openModal}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
            {modalVisible  && !loading && !hasError &&
                <Modal onClose={closeModal}>
                    <OrderDetails data={data} />
                </Modal>
            }

        </div>
    )
}
