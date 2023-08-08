import PropTypes from 'prop-types';
import styles from "../../assets/styles.module.css";
import burgerStyles from '../../assets/burger-ingredients/burger-ingredients.module.css';
import React, { useState } from "react";
import { Menu } from "./components/menu";
import { TabMenu } from "./components/tab-menu";
import { propDefinition } from "../../utils/propDefenitions";
import { IngredientDetails } from "./components/ingredient-details";
import { Modal } from '../modal/modal';
import { IngredientsContext } from '../services/appContext';
export const BurgerIngredients = () => {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const ingredients = React.useContext(IngredientsContext)
  const openModal = (item) => {
    setModalVisible(true)
    setCurrentIngredient(item)
  }

  const closeModal = () => {
    setModalVisible(false);
    setCurrentIngredient(null)
  }

  const [currentTab, setCurrentTab] = React.useState("buns"); // Используем стейт для хранения текущей вкладки

  const handleTabChange = (tabValue) => {
    setCurrentTab(tabValue);
  };

  return (
    <div className={`${styles.col} ${burgerStyles.maxWidth}`}  >
      <TabMenu onTabChange={handleTabChange} />
      <Menu items={ingredients} currentTab={currentTab} openModal={openModal} />
      {
        modalVisible &&
        <Modal title={'Детали ингредиента'} onClose={closeModal}>
          <IngredientDetails data={ currentIngredient } />
        </Modal>
      }
    </div>
  );
}

