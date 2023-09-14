import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import { TIngredient } from "../../../types/types";

export const TopDown: FC<{prop: TIngredient, children: JSX.Element}> = ({ prop, children }) => {
    return (
        <>
            <ConstructorElement type={"top"} text={prop.name + " (верх)"} price={prop.price} thumbnail={prop.image} isLocked={true} extraClass={`mb-4 ml-8`} />
            {children}
            <ConstructorElement type={"bottom"} text={prop.name + ' (низ)'} price={prop.price} thumbnail={prop.image} isLocked={true} extraClass={`mt-2 ml-8`} />

        </>
    )
}
