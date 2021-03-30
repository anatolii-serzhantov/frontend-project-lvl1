export const gameDescription = 'What is the result of the expression?';

export const gameQuestion = () => {
    const randomNumberOne = Math.floor(Math.random() * 100);
    const randomNumberTwo = Math.floor(Math.random() * 100);
    const operations = ['+', '-', '*'];
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    const question = `${randomNumberOne} ${randomOperation} ${randomNumberTwo}`;
    return question;
};

export const gameAnswer = (expression) => {
    const elementsOfExpression = expression.split(' ');
    const numberOne = Number(elementsOfExpression[0]);
    const operator = elementsOfExpression[1];
    const numberTwo = Number(elementsOfExpression[2]);

    switch (operator) {
        case '*':
            return (numberOne * numberTwo).toString();
        case '+':
            return (numberOne + numberTwo).toString();
        case '-':
            return (numberOne - numberTwo).toString();
        default:
            return ' ';
    }
};
