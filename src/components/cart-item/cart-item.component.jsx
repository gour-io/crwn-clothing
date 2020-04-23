import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <idv className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} * ${price}</span>
        </idv>
    </div>
)

export default CartItem;