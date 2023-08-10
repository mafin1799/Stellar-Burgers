import PropTypes from 'prop-types';
import modalStyles from '../../../assets/order-details.module.css';
import Done from "../../../images/done.png";

export const OrderDetails = ({data}) => {
    return (
        <>
            <div className={`pt-30 text_type_digits-large ${modalStyles.digitShadow}`}>
                {data.order.number}
            </div>
            <div className="text_type_main-medium pt-8">
                идентификатор заказа
            </div>
            <div className="pt-15">
                <img src={Done} alt="Done" />
            </div>
            <div className="pt-15 text_type_main-default">
                Ваш заказ начали готовить
            </div>
            <div className="pt-2 pb-30 text_type_main-default text_color_inactive">
                Дождитесь готовности на орбитальной станции
            </div>
        </>
    )
}

OrderDetails.propTypes = {
    data: {
        success: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        order: {
            number: PropTypes.number.isRequired
        }
    }
}
