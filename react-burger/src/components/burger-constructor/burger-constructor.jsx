import React from "react";
import styles from "../../assets/styles.module.css";
import burgerStyles from '../../assets/burger-constructor/burger-constructor.module.css';
import { DragIcon, CurrencyIcon, Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { TopDown } from "./components/top-down";
import { OrderDetails } from "./components/order-details";
import { propStub } from "./components/prop";
import { Modal } from '../modal/modal';
import { getOrderData } from '../../utils/burger-api';
import { IngredientsContext } from '../services/appContext';
import useLocalStorage from '../hooks/local-storage';

export const BurgerConstructor = () => {

    const ingredients = React.useContext(IngredientsContext)
    const [modalVisible, setModalVisible] = React.useState(false)
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState(null);
    const [hasError, setHasError] = React.useState(false)

    const [lastOrder, setLastOrder] = React.useState("lastOrder", null)
    const openModal = () => {
        if (!window.getSelection().toString()) {
            setModalVisible(true)
        }
    }
    const closeModal = () => {
        setModalVisible(false);
    }
    let totalCount = (propStub.price * 2);
    let _bun = null;
    ingredients.map((elem) => {
        totalCount = totalCount + elem.price;

        if(elem.type === 'bun'){      
            _bun = elem;         
        }
    });

   const filteredData = ingredients.filter(function(elem){
        return elem.type !== 'bun'
    })
    const ingredientIds = ingredients.map((elem) => (elem._id));

    React.useEffect(() => {
        try {
            if(modalVisible){
                getOrderData(ingredientIds)
                .then(result => {
                  setData(result);
                  setLastOrder(result)
                  setLoading(false);
                })
            }
           
        } catch (error) {
          setHasError(true)
        }
      }, [modalVisible])


   
    return (
        <div className={`${styles.col} ${burgerStyles.maxWidth}`}>
            <div className="mt-25">
            </div>
            <TopDown prop={_bun}>
                <div className={` ${burgerStyles.container} custom-scroll`}>
                    {
                        filteredData.map((element) => {
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
