import { Menu } from "./components/menu";
import { TabMenu } from "./components/tab-menu";
import React from "react";
import styles from "../../assets/styles.module.css"
export const BurgerIngredients = (props) => {
  const [currentTab, setCurrentTab] = React.useState("buns"); // Используем стейт для хранения текущей вкладки

  console.log(props)
  const handleTabChange = (tabValue) => {
    setCurrentTab(tabValue);
  };

  return (
        <div className={`${styles.col}`} style={{maxWidth: 600}} >
          <TabMenu onTabChange={handleTabChange} />
          <Menu items={props.ingredients} currentTab={currentTab} />
        </div>
  );
}

