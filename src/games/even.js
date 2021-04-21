import runEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(0, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

export default () => {
  runEngine(gameDescription, getQuestionAndAnswer);
};
