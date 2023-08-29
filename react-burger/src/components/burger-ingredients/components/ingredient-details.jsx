import { useParams } from 'react-router-dom';
import styles from '../../../assets/styles.module.css';
import { propDefinition } from "../../../utils/propDefenitions";

export const IngredientDetails = ({ data }) => {

    const {id} = useParams();
    const info = data.find(elem => elem._id === id)
    return (
        <>
            <div className={styles.container}>
                <img src={info.image_large} alt="" />
                <div className="pt-4 text_type_main-medium">
                    {info.name}
                </div>
                <div className={`pt-8 pb-15  text_type_main-default text_color_inactive ${styles.row}`}>
                    <div className={`${styles.col} pr-5`}>
                        Калории,ккал
                        <div>
                            {info.calories}
                        </div>
                    </div>
                    <div className={`${styles.col} pr-5`}>
                        Белки,г
                        <div>
                            {info.proteins}
                        </div>
                    </div>
                    <div className={`${styles.col} pr-5`}>
                        Жиры,г
                        <div>
                            {info.fat}
                        </div>
                    </div>
                    <div className={`${styles.col}`}>
                        Углеводы,г
                        <div>
                            {info.carbohydrates}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

IngredientDetails.propTypes = {
    data: propDefinition.isRequired
}