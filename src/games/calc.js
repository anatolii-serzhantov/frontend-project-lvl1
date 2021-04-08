import runGame from '../index.js';
import getRandomNumber from '../randomNum.js';

const gameDescription = 'What is the result of the expression?';

const gameQuestion = () => {
  const randomNumberOne = getRandomNumber(0, 101);
  const randomNumberTwo = getRandomNumber(0, 101);
  const operations = ['+', '-', '*'];
  const randomOperation = operations[getRandomNumber(0, operations.length)];
  const question = `${randomNumberOne} ${randomOperation} ${randomNumberTwo}`;
  return question;
};

const gameAnswer = (expression) => {
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

export default () => {
  runGame(gameDescription, gameQuestion, gameAnswer);
};
