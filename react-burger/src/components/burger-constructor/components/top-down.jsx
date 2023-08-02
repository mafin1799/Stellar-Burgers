import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"

export const TopDown = ({prop, children}) => {

    return (
        <>
        {console.log(prop)}
            <ConstructorElement type={"top"} text={prop.name } price={prop.price} thumbnail={prop.image} isLocked={true} extraClass={`mb-4 ml-8`}/>
            {children}
            <ConstructorElement type={"bottom"} text={prop.name } price={prop.price} thumbnail={prop.image} isLocked={true} extraClass={`mt-2 ml-8`} />
        </>
    )
}