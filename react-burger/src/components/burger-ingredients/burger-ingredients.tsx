import styles from "../../assets/styles.module.css";
import burgerStyles from '../../assets/burger-ingredients/burger-ingredients.module.css';
import { useState, useRef, useEffect } from "react";
import { Menu } from "./components/menu";
import { TabMenu } from "./components/tab-menu";
import { useSelector } from '../../types/hooks'
import React from "react";


export const BurgerIngredients = () => {

  const ingredients = useSelector(store => store.ingredientsInfo.ingredients)
  const tabOrder = ['bun', 'sauce', 'main']
  const [currentTab, setCurrentTab] = useState('bun');



  const handleScroll = () => {
    const contentGroups = document.querySelectorAll('.group');
    let closestIdx = -1;
    let closestDistanse = Infinity;
    for (let i = 0; i < contentGroups.length; i++) {
      const contentGroup = contentGroups[i];
      const rect = contentGroup.getBoundingClientRect();
      const distance = ((rect.top) * (rect.top) + rect.left * rect.left);
      if (distance < closestDistanse) {
        closestDistanse = distance;
        closestIdx = i;
      }
    }
    setCurrentTab(tabOrder[closestIdx]);
  }
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }
    return () => containerRef.current && containerRef.current.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      {
        ingredients &&
        <div className={`${styles.col} ${burgerStyles.maxWidth}`}  >
          <TabMenu currentTab={currentTab} />
          <Menu items={ingredients} _ref={containerRef} />
        </div>
      }
    </>
  );
}

