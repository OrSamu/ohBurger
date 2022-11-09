import React, { useContext, useState } from 'react'

import CartContext from '../../store/cartContext';
import Modal from '../UI/modal';
import CartItem from './cartItem';
import classes from './cart.module.css';

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const cartAddHandler = (item) => {
        cartContext.addItem({...item, amount: 1});
    };

    const cartRemoveHandler = (id) => {
        cartContext.removeItem(id);
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartContext.items.map((orderItem) => {
                return <CartItem key={orderItem.id}
                            name={orderItem.name}
                            amount={orderItem.amount}
                            price={orderItem.price}
                            onAdd={cartAddHandler.bind(null, orderItem)}
                            onRemove={cartRemoveHandler.bind(null, orderItem.id)}
                        />
            })}
        </ul>
    );

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    return (
        <Modal onCloseModal={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems ? <button className={classes.button}>Order</button> : null}
            </div>
        </Modal>
    )
}

export default Cart