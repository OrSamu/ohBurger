import React, { useContext } from 'react'

import CartContext from '../../../store/cartContext';
import MealItemForm from './mealItemForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {
    const cartContext = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
      const itemToAdd = {
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      };

      cartContext.addItem(itemToAdd);
    }

  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem
