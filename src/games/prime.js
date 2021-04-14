import runEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const runGameRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  const result = [randomNumber, answer];
  return result;
};

export default () => {
  runEngine(gameDescription, runGameRound);
};
