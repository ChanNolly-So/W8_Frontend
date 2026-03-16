import React , {useState} from "react";

export default function OrderCard({item, onChangeQuantity}) {
  const { product, price, quantity } = item;

  const handleMinus = () => {
    if (quantity > 0) {
      onChangeQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    onChangeQuantity(quantity + 1);
  };

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>${price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={handleMinus}>-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={handlePlus}>+</div>
      </div>
    </div>
  );
}
