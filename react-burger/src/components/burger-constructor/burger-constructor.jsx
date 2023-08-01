import styles from "../../assets/styles.module.css"
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"
export const BurgerConstructor = (props) => {

    console.log(props.ingredients)
    return (
        <div className={`pt-25 ${styles.col}`} style={{border: '1px solid #fff'}}>
           
            {
            props.ingredients.map((element) => {
                return(
                  <ConstructorElement thumbnail={element.image} key={element._id} price={element.price} text={element.name}/>
                )
                  
                 
            })
            }
        </div>
    )
}
