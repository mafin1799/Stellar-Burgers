import styles from "../../../assets/burger-ingredients/tab.module.css";
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';


export const TabMenu = ({currentTab}) => {
    return (
        <div>
            <div className={`text_type_main-large pt-10 ${styles.title}`}>Соберите бургер</div>

            {/**
             * Tab menu, рыба, доделать переключение по якорным ссылкам
             */}
            <div className={`pt-5 ${styles.dFlex}`}>
                <Tab value='bun' active={currentTab === "bun"}>
                    Булки
                </Tab>

                <Tab value='sauce'  active={currentTab === "sauce"} >
                    Соусы
                </Tab>

                <Tab value='main'  active={currentTab === "main"} >
                    Начинки
                </Tab>
            </div>

        </div>

    )
}

TabMenu.propTypes = {
    currentTab: PropTypes.string.isRequired
}
