import gameEngine from '../index.js';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return findGcd(b, a % b);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameQuestion = () => {
  const quantityOfRandomNumbrs = 100;
  const randomNumberOne = Math.floor(Math.random() * quantityOfRandomNumbrs);
  const randomNumberTwo = Math.floor(Math.random() * quantityOfRandomNumbrs);
  return `${randomNumberOne} ${randomNumberTwo}`;
};

const gameAnswer = (expression) => {
  const numbers = expression.split(' ');
  const firstNumber = parseInt(numbers[0], 10);
  const secondNumber = parseInt(numbers[1], 10);
  return String((findGcd(firstNumber, secondNumber)));
};

export default () => {
  gameEngine(gameDescription, gameQuestion, gameAnswer);
};
