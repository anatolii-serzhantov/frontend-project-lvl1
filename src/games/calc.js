import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, operators.length)];
};

const calculateMathOperation = (randomNumberOne, randomNumberTwo, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      result = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      result = randomNumberOne * randomNumberTwo;
      break;
    default:
      throw new Error(`Оператор ${operator} не поддерживается`);
  }
  return result;
};

const runGameRound = () => {
  const randomNumberOne = getRandomNumber(0, 101);
  const randomNumberTwo = getRandomNumber(0, 101);
  const operator = getOperator();
  const question = `${randomNumberOne} ${operator} ${randomNumberTwo}`;
  const answer = calculateMathOperation(randomNumberOne, randomNumberTwo, operator).toString();
  const result = [question, answer];
  return result;
};

export default () => {
  launchGame(gameDescription, runGameRound);
};
