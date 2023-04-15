import React from 'react';
import { addItem, decrement, removeItem } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

export function Item({ id, title, type, price, count, imageUrl, size }) {
  const dispatch = useDispatch();

  // const onClickPlus = (id) => {
  //   dispatch(
  //     addItem({
  //       id,
  //     }),
  //   );
  // };

  const onClickMinus = (id) => {
    dispatch(
      decrement({
        id,
      }),
    );
  };

  return (
    <div className="content__items__cart">
      <div className="cart__item">
        <div className="cart__item_img">
          <img src={imageUrl} alt="pizza" />
        </div>
        <div className="cart__item_info">
          <h3>{title}</h3>
          <p>
            {type} тесто, {size} см
          </p>
        </div>
        <div onClick={() => onClickMinus(id)} className="cart__item_count">
          <div class="button button--outline button--circle cart__item-count-minus">
            <img width={10} height={10} src="./img/minus.svg" alt="minus" />
          </div>
          <b>{count}</b>
          <div
            // onClick={() => onClickPlus(id)}
            class="button button--outline button--circle cart__item-count-plus">
            <img width={10} height={10} src="./img/plusOrang.svg" alt="plus" />
          </div>
        </div>
        <div className="cart__item_price">
          <b>{price * count} ₽</b>
        </div>
        <div onClick={() => dispatch(removeItem(id))} className="cart__item_remove">
          <div className="button button--outline button--circle">
            <img width={10} height={10} src="./img/X.svg" alt="x" />
          </div>
        </div>
      </div>
    </div>
  );
}