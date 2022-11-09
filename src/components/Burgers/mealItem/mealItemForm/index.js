import React, { useRef, useState } from 'react'

import Input from '../../../UI/input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmountNumber > 10 || enteredAmountNumber < 1 || enteredAmount.trim().length === 0) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
            id: 'amount_' + props.id,
            type: 'number',
            min:'1',
            max:'10',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>+ Add</button>
        {!amountIsValid ? <p>Please set a valid amount (1-10)</p> : null}
    </form>
  )
}

export default MealItemForm