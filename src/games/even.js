import runGame from '../index.js';
import getRandomNumber from '../randomNum.js';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameQuestion = () => {
  const randomNumber = getRandomNumber(0, 100);
  return randomNumber;
};

const gameAnswer = (number) => {
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return correctAnswer;
};

export default () => {
  runGame(gameDescription, gameQuestion, gameAnswer);
};
