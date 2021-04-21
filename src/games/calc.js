import runEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, operators.length)];
};

const calculateMathOperation = (randomNumberOne, randomNumberTwo, operator) => {
  switch (operator) {
    case '+': return randomNumberOne + randomNumberTwo;
    case '-': return randomNumberOne - randomNumberTwo;
    case '*': return randomNumberOne * randomNumberTwo;
    default: throw new Error(`Оператор ${operator} не поддерживается`);
  }
};

const getQuestionAndAnswer = () => {
  const randomNumberOne = getRandomNumber(0, 101);
  const randomNumberTwo = getRandomNumber(0, 101);
  const operator = getOperator();
  const question = `${randomNumberOne} ${operator} ${randomNumberTwo}`;
  const answer = calculateMathOperation(randomNumberOne, randomNumberTwo, operator);
  return [question, String(answer)];
};

export default () => {
  runEngine(gameDescription, getQuestionAndAnswer);
};
