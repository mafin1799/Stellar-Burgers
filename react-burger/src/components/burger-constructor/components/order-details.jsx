import PropTypes from 'prop-types';
import modalStyles from '../../../assets/order-details.module.css';
import Done from "../../../images/done.png";
import { useSelector } from 'react-redux';
export const OrderDetails = () => {
    const orderNumber = useSelector(store => store.orderInfo.orderNumber)
    return (
        <>
            <div className={`pt-30 text_type_digits-large ${modalStyles.digitShadow}`}>
                {orderNumber}
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


