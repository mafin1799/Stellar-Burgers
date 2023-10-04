import styles from "../../../assets/styles.module.css";
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteIngredient } from "../../../services/actions/ingredients-constructor";
import { useDrag, useDrop } from "react-dnd";
import { move } from "../../../services/actions/ingredients-constructor";
import { TIngredient } from "../../../types/types";
import { FC } from "react";

export const DraggableElement: FC<{ data: TIngredient}> = ({ data }) => {
    const dispatch = useDispatch();
    const { id } = data;
    const ref = useRef<HTMLDivElement>(null)

    const [{ isDrag }, dragRef] = useDrag({
        type: 'ingredient',
        item: { id },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })

    const [, dropTargetInside] = useDrop({
        accept: 'ingredient',
        hover(item: {id: string}) {
            if (!ref.current) {
                return
            }
            const dragId = item.id;
            const targetId = id;

            if (dragId === targetId) {
                return
            }

            dispatch(move({ dragId, targetId }))
        },
        collect() { }
    })
    dragRef(dropTargetInside(ref))
    const opacity = isDrag ? 0 : 1;
    return (
        <div
            style={{ opacity }}
            ref={ref}
            className={`${styles.snapStart} ${styles.dFlex} ${styles.verticalCenter} pb-4`}>

            <span className="pr-2"><DragIcon type="primary"/></span>

            <ConstructorElement
                thumbnail={data.image}
                price={data.price}
                text={data.name}
                handleClose={() => dispatch(deleteIngredient(id))} />
        </div>
    )
}
