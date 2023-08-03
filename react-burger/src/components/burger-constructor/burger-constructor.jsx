import PropTypes from 'prop-types';
import React from "react";
import styles from "../../assets/styles.module.css";
import burgerStyles from '../../assets/burger-constructor/burger-constructor.module.css';
import { DragIcon, CurrencyIcon, Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { TopDown } from "./components/top-down";
import { propDefinition } from "../../utils/propDefenitions";
import { OrderDetails } from "./components/order-details";
import { propStub } from "./components/prop";

export const BurgerConstructor = ({ingredients}) => {
    const [modalVisible,setModalVisible] = React.useState(false)
   
    const openModal = () => {
        if( !window.getSelection().toString()){
            setModalVisible(true)
        }
    }
    const closeModal = () => {
        setModalVisible(false);
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Escape'){
            closeModal();
        }
    }
    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
        return() => document.removeEventListener('keydown',handleKeyPress)
      })

    let sum = (propStub.price * 2);
    return (
        <div className={`${styles.col} ${burgerStyles.maxWidth}`}>
            <div className="mt-25">
            </div>
            <TopDown prop={propStub}>
                <div className={` ${burgerStyles.container} custom-scroll`}>
                    {
                        ingredients.map((element) => {
                            { sum = sum + element.price}
                            return (
                                <div key={element._id} className={`${styles.snapStart} ${styles.dFlex} ${styles.verticalCenter} pb-4`} >
                                    <span className="pr-2"><DragIcon /></span>
                                    <ConstructorElement thumbnail={element.image}  price={element.price} text={element.name} />
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
                <div  className={burgerStyles.mlAuto}>
                    <Button type="primary" htmlType="button" onClick={openModal}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
            {modalVisible && <OrderDetails closeModal={closeModal}/>}
        </div>
    )
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(propDefinition).isRequired,
}