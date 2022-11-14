import { useState } from 'react'

const useInputValidation = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const inputIsValid = validateValue(enteredValue);
    const hasError = !inputIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }
    
    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    const resetInput = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

  return {
    value: enteredValue,
    isValid: inputIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInput
  }
}

export default useInputValidation