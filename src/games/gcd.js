import runEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return findGcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const randomNumberOne = getRandomNumber(0, 100);
  const randomNumberTwo = getRandomNumber(0, 100);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const answer = findGcd(randomNumberOne, randomNumberTwo);
  return [question, String(answer)];
};

export default () => {
  runEngine(gameDescription, getQuestionAndAnswer);
};
