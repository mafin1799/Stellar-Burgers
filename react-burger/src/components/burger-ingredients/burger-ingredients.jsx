import PropTypes from 'prop-types';
import styles from "../../assets/styles.module.css";
import burgerStyles from '../../assets/burger-ingredients/burger-ingredients.module.css';
import React, { useState } from "react";
import { Menu } from "./components/menu";
import { TabMenu } from "./components/tab-menu";
import { propDefinition } from "../../utils/propDefenitions";
import { IngredientDetails } from "./components/ingredient-details";

export const BurgerIngredients = ({ ingredients }) => {
  const [modal, setModal] = React.useState(false)
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const openModal = (id) => {
    setModal(true)
    setCurrentIngredient(id)
  }

  const closeModal = () => {
    setModal(false);
    setCurrentIngredient(null)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }
React.useEffect(() => {
  document.addEventListener('keydown', handleKeyPress)
  return() => document.removeEventListener('keydown',handleKeyPress)
})
  const [currentTab, setCurrentTab] = React.useState("buns"); // Используем стейт для хранения текущей вкладки
  const handleTabChange = (tabValue) => {
    setCurrentTab(tabValue);
  };

  return (
    <div className={`${styles.col} ${burgerStyles.maxWidth}`}  >
      <TabMenu onTabChange={handleTabChange} />
      <Menu items={ingredients} currentTab={currentTab} openModal={openModal} />
      {modal && <IngredientDetails title={'Детали ингредиента'} data={currentIngredient} onClose={closeModal} />}
    </div>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(propDefinition).isRequired,
}