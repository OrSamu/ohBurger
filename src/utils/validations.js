const inputIsntEmpty = (input) => {
    return input.trim() !== '';
}

const inputHasFiveChars = (input) => {
    return input.trim().length === 5;
}

export { inputIsntEmpty, inputHasFiveChars };