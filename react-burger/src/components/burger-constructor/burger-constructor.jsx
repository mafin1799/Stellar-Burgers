import styles from "../../assets/styles.module.css"
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components"
export const BurgerConstructor = (props) => {
    console.log(props.ingredients)
    return (
        <div className={`mt-25 ${styles.col} custom-scroll`} style={{ height: `calc(100vh - ${200}px)`, overflow: 'auto', maxWidth: 600 }}>
            {
                props.ingredients.map((element) => {
                    return (
                        <div className={`${[styles.row, styles.verticalCenter]} pb-4`} >
                            <span className="pr-2"><DragIcon/></span>
                            <ConstructorElement thumbnail={element.image} key={element._id} price={element.price} text={element.name} />
                        </div>
                    )
                })
            }
        </div>
    )
}
