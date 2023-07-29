import { stub } from "../../utils/data";
import { Menu } from "./comp/menu";
import { TabMenu } from "./comp/tab-menu";
import { useState } from "react";
export const BurgerIngredients = () => {
    const [currentTab, setCurrentTab] = useState("buns"); // Используем стейт для хранения текущей вкладки
  
    const handleTabChange = (tabValue) => {
        setCurrentTab(tabValue);
      };

    return (
    <div className="col w-50">
      <TabMenu onTabChange={handleTabChange}/>
      <Menu items={stub} currentTab={currentTab}/>
    </div>
  );
}

