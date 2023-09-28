import { useEffect } from 'react';
import { useSelector } from '../../types/hooks';
import styles from './order-info.module.css'
import { OrderIngredient } from '../Orders/card/ingredient/order-ingredient';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate, useParams } from 'react-router-dom';
import { FC } from 'react';
import { TOrder } from '../../types/types';

type TOrderInfo = {
  modal?: boolean,
  data: ReadonlyArray<TOrder>
}

export const OrderInfo: FC<TOrderInfo> = ({ modal, data }) => {

  const navigate = useNavigate();
  const { id } = useParams();

  const current = data.find(item => item._id === id);
  const ingredientsInfo = useSelector((store) => store.ingredientsInfo.ingredients);
  const orderingredients = current?.ingredients.map(item => ingredientsInfo!.find(data => data._id === item));

  const totalPrice = orderingredients?.reduce((acc, current) => acc + current?.price!, 0);

  const uniq = current?.ingredients.filter((item, idx) => {
    return current.ingredients.indexOf(item) === idx;
  }).reverse();

  function Counter(arr: string[], id: string) {
    return arr.filter(item => item == id).length
  };

  useEffect(() => {
    if (data && !current) {
      return (navigate('/*'))
    }
  }, [])

  return (
    <>
      {current === undefined
        ? <p>Загрузка</p>
        : <div className={`${styles.orderBlock}`}>

          {
            modal
              ? <p className={`text text_type_digits-default mb-10`}>#{current.number}</p>
              : <p className={`${styles.modal} text text_type_digits-default mb-10 mt-20`}>#{current.number}</p>
          }
          <h3 className={`${styles.orderName} text text_type_main-medium mb-3`}>{current.name}</h3>
          {
            current.status === 'created' &&
            <p className={` text text_type_main-default`}>Создан</p>
          }

          {
            current.status === 'pending' &&
            <p className={`text text_type_main-default`}>Готовится</p>
          }

          {
            current.status === 'done' &&
            <p className={`${styles.orderDone} text text_type_main-default mb-15`}>Готов</p>
          }
          <p className={`${styles.orderConsist} text text_type_main-medium mb-6`}>Состав:</p>
          <ul className={`${styles.blockWithScroll} mb-10`}>
            {
              uniq!.map((item) => {
                const ingredientInfo = ingredientsInfo!.find(ingredient => ingredient._id === item);
                return (<li className={`${styles.ingredientCard}`} key={ingredientInfo!._id}>
                  <div className={`${styles.ingredient}`}>
                    <OrderIngredient intersection={false} id={item} />
                    <p className={`text text_type_main-default ml-4`}>{ingredientInfo!.name}</p>
                  </div>
                  <div className={`${styles.ingredientPriceBlock}`}>
                    <p className={`text text_type_digits-default mr-2`}>{Counter(current.ingredients, item)} x {ingredientInfo!.price}</p>
                    <CurrencyIcon type="primary" />
                  </div>
                </li>)
              })}
          </ul>
          <div className={`${styles.bottomBlock}`}>
            <p className={`${styles.orderDate} text text_type_main-default `}>
              <FormattedDate date={new Date(current.createdAt)} />
            </p>
            <div className={`text_type_digits-medium`}>
              <span >
                {totalPrice!} <CurrencyIcon type="primary" />
              </span>
            </div>
          </div>
        </div >
      }
    </>
  );
}
