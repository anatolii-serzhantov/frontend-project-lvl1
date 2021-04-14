import runEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const runGameRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = randomNumber;
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  const result = [question, answer];
  return result;
};

export default () => {
  runEngine(gameDescription, runGameRound);
};
