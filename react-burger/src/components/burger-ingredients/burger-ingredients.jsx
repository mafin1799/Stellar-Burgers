import { Menu } from "./components/menu";
import { TabMenu } from "./components/tab-menu";
import React from "react";
import styles from "../../assets/styles.module.css";
import burgerStyles from '../../assets/burger-ingredients/burger-ingredients.module.css'
import PropTypes from 'prop-types'
import { propDefinition } from "../../utils/propDefenitions"

export const BurgerIngredients = ({ingredients}) => {
  
  const [currentTab, setCurrentTab] = React.useState("buns"); // Используем стейт для хранения текущей вкладки
  const handleTabChange = (tabValue) => {
    setCurrentTab(tabValue);
  };

  return (
        <div className={`${styles.col} ${burgerStyles.maxWidth}`}  >
          <TabMenu onTabChange={handleTabChange} />
          <Menu items={ingredients} currentTab={currentTab} />
        </div>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(propDefinition).isRequired,
}