import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { propDefinition } from "../../../utils/propDefenitions";
import uuid from 'react-uuid';
export const TopDown = ({ prop, children }) => {
    return (
        <>
                    <ConstructorElement type={"top"} text={prop.name + " (верх)"} key={uuid()} price={prop.price} thumbnail={prop.image} isLocked={true} extraClass={`mb-4 ml-8`} />
                    {children}
                    <ConstructorElement type={"bottom"} text={prop.name + ' (низ)'} key={uuid()} price={prop.price} thumbnail={prop.image} isLocked={true} extraClass={`mt-2 ml-8`} />
                
        </>

    )
}

TopDown.propTypes = {
    prop: propDefinition.isRequired,
}