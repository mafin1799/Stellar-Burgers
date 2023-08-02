import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
export const TabMenu = ({ onTabChange }) => {

    const [currentTab, setCurrentTab] = useState("bun"); // Используем стейт для хранения текущей вкладки

    const handleTabChange = (tabValue) => {
        setCurrentTab(tabValue);
        onTabChange(tabValue); // Вызываем переданный колбэк при смене вкладки
    };
    return (
        <div>
            <div className="text_type_main-large pt-10" style={{height: 40}}>Соберите бургер</div>

            {/**
             * Tab menu, рыба, доделать переключение по якорным ссылкам
             */}
            <div style={{ display: 'flex' }} className='pt-5'>
                <Tab value='bun' onClick={() => handleTabChange("bun")} active={currentTab === "bun"}>
                    Булки
                </Tab>
               
                <Tab value='sauce' onClick={() => handleTabChange("sauce")} active={currentTab === "sauce"} >
                    Соусы
                </Tab>

                <Tab value='main' onClick={() => handleTabChange("main")} active={currentTab === "main"} >
                    Начинки
                </Tab>
            </div>

        </div>

    )
}