import styles from "../../../assets/burger-ingredients/image.module.css"
import PropTypes from 'prop-types'
export const ImageWithCounter = ({ imageUrl, counter }) => {
    return (
        <div className={styles.image}>
            <img src={imageUrl} className="pl-4 pr-4 pb-1"  alt="Изображение" />
            <span className="counter default">
                <div className="counter__num">
                    {counter}
                </div>
            </span>
        </div>
    );
};


ImageWithCounter.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired
}
