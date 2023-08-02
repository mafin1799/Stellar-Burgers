import styles from "../../assets/styles.module.css"
import burgerStyles from '../../assets/burger-constructor/burger-constructor.module.css'
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { TopDown } from "./components/top-down"
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"


export const BurgerConstructor = ({ingredients}) => {
    

   
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

    let sum = (prop.price * 2);
    return (
        <div className={`${styles.col} ${burgerStyles.maxWidth}`}>
            <div className="mt-25">
            </div>
            <TopDown prop={prop}>
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
                    <Button type="primary" htmlType="button">
                        Оформить заказ
                    </Button>
                </div>
            </div>

        </div>
    )
}
