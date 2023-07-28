import { stub } from "../../utils/data";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

const getAliasGroup = (item) => {

    if (item.type === 'bun') {
        return 'Булки';
    }
    else if (item.type === 'main') {
        return 'Начинки';
    }
    else if (item.type === 'sauce') {
        return 'Соусы';
    }
}
const MenuGroup = ({ type, data }) => {
    debugger
    console.log(data)
    return (
        <div>
            <span className="text_type_main-medium">
                {getAliasGroup(type)}
            </span>
            {data.map(item => (
                <MenuCard items={item} />
            ))}
        </div>
    )
}
const MenuCard = (item) => {
    return (
        <div>
            {item.name}
        </div>
    )
}

const Menu = ({ items }) => {

    /**
     * Группируем обьекты по типу
     */
    const groupedItems = items.reduce((group, value) => {
        if (!group[value.type]) {
            group[value.type] = [];
        }
        group[value.type].push(value);
        return group;
    }, {});

    return (
        <>
           <MenuGroup key="bun" type="bun" data={groupedItems.bun} />
           <MenuGroup key={"bun"} type={"bun"} data={groupedItems["main"]} />
           <MenuGroup key={"bun"} type={"bun"} data={groupedItems["sauce"]} />
        </>
    )
}
export const BurgerIngredients = () => {

    return (
        <div className="col pt-10">
            <span className="text_type_main-large">Соберите бургер</span>

            {/**
             * Tab menu, рыба, доделать переключение по якорным ссылкам
             */}
            <div style={{ display: 'flex' }}>
                <Tab active={true}>
                    Булки
                </Tab>
                <Tab active={false} >
                    Соусы
                </Tab>
                <Tab active={false} >
                    Начинки
                </Tab>
            </div>

            <Menu items={stub} />
        </div>
    )
}

