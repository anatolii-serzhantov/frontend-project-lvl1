import runGame from '../index.js';
import getRandomNumber from '../randomNum.js';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return findGcd(b, a % b);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameQuestion = () => {
  const randomNumberOne = getRandomNumber(0, 100);
  const randomNumberTwo = getRandomNumber(0, 100);
  return `${randomNumberOne} ${randomNumberTwo}`;
};

const gameAnswer = (expression) => {
  const numbers = expression.split(' ');
  const firstNumber = parseInt(numbers[0], 10);
  const secondNumber = parseInt(numbers[1], 10);
  return String((findGcd(firstNumber, secondNumber)));
};

export default () => {
  runGame(gameDescription, gameQuestion, gameAnswer);
};
