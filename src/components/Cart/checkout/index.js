import React from 'react'

import classes from './checkout.module.css'
import useInputValidation from '../../../hooks/useInputValidation';
import {inputIsntEmpty, inputHasFiveChars} from '../../../utils/validations';

const api = 'https://http-practice-abf78-default-rtdb.firebaseio.com/Orders.json';

const Checkout = (props) => {
    const {
            value: enteredName,
            isValid: isEnteredNameValid,
            hasError: nameHasError,
            valueChangeHandler: nameChangeHandler,
            inputBlurHandler: nameBlurHandler,
            resetInput: resetNameInput
        } = useInputValidation(inputIsntEmpty);

        const {
            value: enteredStreet,
            isValid: isEnteredStreetValid,
            hasError: streetHasError,
            valueChangeHandler: streetChangeHandler,
            inputBlurHandler: streetBlurHandler,
            resetInput: resetStreetInput
        } = useInputValidation(inputIsntEmpty);

        const {
            value: enteredPostal,
            isValid: isEnteredPostalValid,
            hasError: postalHasError,
            valueChangeHandler: postalChangeHandler,
            inputBlurHandler: postalBlurHandler,
            resetInput: resetPostalInput
        } = useInputValidation(inputHasFiveChars);

        const {
            value: enteredCity,
            isValid: isEnteredCityValid,
            hasError: cityHasError,
            valueChangeHandler: cityChangeHandler,
            inputBlurHandler: cityBlurHandler,
            resetInput: resetCityInput
        } = useInputValidation(inputIsntEmpty);

        const isFormValid = isEnteredNameValid && isEnteredStreetValid && isEnteredPostalValid && isEnteredCityValid;

    const cancelHandler = (event) => {
        event.preventDefault();
        props.onClose();
    };

    const resetFields = () => {
        resetNameInput();
        resetStreetInput();
        resetPostalInput();
        resetCityInput();
    }

    const blurFields = () => {
        nameBlurHandler();
        streetBlurHandler();
        postalBlurHandler();
        cityBlurHandler();
    }

    const confirmHandler = (event) => {
        event.preventDefault();
        blurFields();

        if(isFormValid) {
            //sendOrder
            resetFields();
        }
    };

    const nameClasses = nameHasError ? `${classes.control} ${classes.invalid}` : classes.control;
    const streetClasses = streetHasError ? `${classes.control} ${classes.invalid}` : classes.control;
    const postalClasses = postalHasError ? `${classes.control} ${classes.invalid}` : classes.control;
    const cityClasses = cityHasError ? `${classes.control} ${classes.invalid}` : classes.control;
    console.log(`nameClasses -  ${nameClasses}`);

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameClasses}>
            <label htmlFor='name'>Your Name: </label>
            <input type="text" id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler}></input>
            {nameHasError ? <p>Name isn't valid, please fill your name</p> : null}
        </div>
        <div className={streetClasses}>
            <label htmlFor='street'>Street: </label>
            <input type="text" id='street' value={enteredStreet} onChange={streetChangeHandler} onBlur={streetBlurHandler}></input>
            {streetHasError ? <p>Street isn't valid, please fill your street</p> : null}
        </div>
        <div className={postalClasses}>
            <label htmlFor='postal'>Postal Code: </label>
            <input type="text" id='postal' value={enteredPostal} onChange={postalChangeHandler} onBlur={postalBlurHandler}></input>
            {postalHasError ? <p>Postal code isn't valid, please fill 5 digits postal code</p> : null}
        </div>
        <div className={cityClasses}>
            <label htmlFor='city'>City: </label>
            <input type="text" id='city' value={enteredCity} onChange={cityChangeHandler} onBlur={cityBlurHandler}></input>
            {cityHasError ? <p>City isn't valid, please fill your city</p> : null}
        </div>
        <div className={classes.control}>
            <button onClick={cancelHandler}>Cancel</button>
            <button>Confirm</button>
        </div>
    </form>
  )
}

export default Checkout