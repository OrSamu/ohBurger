import React, { useContext, useEffect, useState } from 'react'

import CartIcon from '../../Cart/cartIcon';
import CartContext from '../../../store/cartContext';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const [buttonBump, setButtonBump] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;
  const itemsNumber = items.reduce((currentNumber, item) => {return (currentNumber + item.amount)}, 0);
  const buttonClasses = `${classes.button} ${buttonBump ? classes.bump : ''} `;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonBump(true);
    
    const timer = setTimeout(() => {
      setButtonBump(false)
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
            </span>
        <span >Your Cart</span>
        <span className={classes.badge}>{itemsNumber}</span>
    </button>
  );
}

export default HeaderCartButton;
