import styles from '../../../assets/styles.module.css';
import { Modal } from "../../modal/modal";
import { propDefinition } from "../../../utils/propDefenitions";

export const IngredientDetails = ({ onClose, data }) => {
    return (
        <Modal title={'Детали ингредиента'} onClose={onClose}>
            <div className={styles.container}>
                <img src={data.image_large} alt="" />
                <div className="pt-4 text_type_main-medium">
                    {data.name}
                </div>
                <div className={`pt-8 pb-15  text_type_main-default text_color_inactive ${styles.row}`}>
                    <div className={`${styles.col} pr-5`}>
                        Калории,ккал
                        <div>
                            {data.calories}
                        </div>
                    </div>
                    <div className={`${styles.col} pr-5`}>
                        Белки,г
                        <div>
                            {data.proteins}
                        </div>
                    </div>
                    <div className={`${styles.col} pr-5`}>
                        Жиры,г
                        <div>
                            {data.fat}
                        </div>
                    </div>
                    <div className={`${styles.col}`}>
                        Углеводы,г
                        <div>
                            {data.carbohydrates}
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

IngredientDetails.propTypes = {
    data: propDefinition.isRequired,
}