import styles from "../../../assets/styles.module.css";
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { deleteIngredient } from "../../../services/actions/ingredients-constructor";
import { useDrag } from "react-dnd";

export const DraggableElement = ({ data }) => {
    const dispatch = useDispatch();
    const {id} = data;
   // console.log(data)

    const [{isDrag}, dragRef] = useDrag({
        type: 'ingredient',
        item: {id},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })

    
    return (
        !isDrag &&
        <div
            ref={dragRef}
            key={uuid()}
            className={`${styles.snapStart} ${styles.dFlex} ${styles.verticalCenter} pb-4`}

            /*onMouseEnter={() => { handleHover(data.id, idx) }}*/ >

            <span className="pr-2"><DragIcon /></span>

            <ConstructorElement
                thumbnail={data.image}
                price={data.price}
                text={data.name}
                handleClose={() => dispatch(deleteIngredient(data.id))} />
        </div>
    )


}