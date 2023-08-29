import PropTypes from 'prop-types';
import styles from "../../../assets/burger-ingredients/image.module.css";

export const ImageWithCounter = ({ imageUrl, counter }) => {
    return (
        <div className={styles.image}>
            <img src={imageUrl} className="pl-4 pr-4 pb-1"  alt="Изображение" />
            {counter > 0 &&  <span className="counter default">

               <div className="counter__num">
                    {counter}
                </div>
            </span>}
        </div>
    );
};

ImageWithCounter.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired
}
