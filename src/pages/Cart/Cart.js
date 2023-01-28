import React, { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [checkList, setCheckList] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/carts/1')
      .then(res => res.json())
      .then(data => {
        setCartList(data.products);
      });
  }, []);

  const isAllChecked = '';

  const allChecked = () => {};

  const handleCheckBox = id => {};

  return (
    <div className="cart">
      <input type="checkbox" checked={isAllChecked} />
      전체선택
      <div className="line" />
      {cartList.map(({ id, price, quantity, title }) => {
        return (
          <div className="productBox" key={id}>
            <input type="checkbox" checked="" />
            <span className="title">{title}</span>
            <span>${price}</span>
            <span>{quantity}개</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
