import styles from "../../assets/styles.module.css"
import burgerStyles from '../../assets/burger-components/burger-components.module.css'
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { TopDown } from "./components/top-down"
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import React from "react"

export const BurgerConstructor = (props) => {
    console.log(props.ingredients)

   
    const prop = {
        _id: "643d69a5c3f7b9001cfa093c",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0
    }

    var sum = (prop.price * 2);
    return (
        <div className={styles.col} style={{ maxWidth: 600 }}>
            <div className="mt-25">
            </div>
            <TopDown prop={prop}>
               
                <div className={` ${burgerStyles.container} custom-scroll`}>
                    {

                        props.ingredients.map((element) => {
                            { sum = sum + element.price}
                            return (
                                <div className={`${styles.snapStart} ${styles.dFlex} ${styles.verticalCenter} pb-4`} >
                                    <span className="pr-2"><DragIcon /></span>
                                    <ConstructorElement thumbnail={element.image} key={element._id} price={element.price} text={element.name} />
                                </div>
                            )
                        })
                    }
                </div>
            </TopDown>




            <div className={`pt-4 ${styles.row}`}>
                <div className={`text_type_digits-medium`} style={{ marginLeft: '35%' }}>
                    <span >
                        {sum} <CurrencyIcon />
                    </span>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <Button type="primary">
                        Оформить заказ
                    </Button>
                </div>
            </div>

        </div>
    )
}
