import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item: {name, quantity, price, imageUrl} }) => (
    <div className='checkout-item'>
        <span className='image-container'>
            <img src={imageUrl} alt='item'></img>
        </span>   
        <span className='name'>{name}</span>
        <span className='quantity'>&#10094; {quantity} &#10095;</span>
        <span className='price'>€{price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
);

export default CheckoutItem;