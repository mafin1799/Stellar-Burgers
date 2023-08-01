import { Menu } from "./comp/menu";
import { TabMenu } from "./comp/tab-menu";
import React from "react";
import styles from "../../assets/styles.module.css"
export const BurgerIngredients = (props) => {
  const [currentTab, setCurrentTab] = React.useState("buns"); // Используем стейт для хранения текущей вкладки

  console.log(props)
  const handleTabChange = (tabValue) => {
    setCurrentTab(tabValue);
  };

  return (
    <>
      {
        <div className={`${styles.col}`} style={{ marginLeft: 'auto', marginRight: 'calc(50% + 40px)' }}>
          <TabMenu onTabChange={handleTabChange} />
          <Menu items={props.ingredients} currentTab={currentTab} />
        </div>}
    </>
  );
}

