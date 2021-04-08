import runGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameQuestion = () => {
  const quantityOfRandomNumbrs = 100;
  const randomNumber = String(Math.floor(Math.random() * quantityOfRandomNumbrs));
  return randomNumber;
};

const gameAnswer = (expression) => {
  if (expression === '1' || expression === '0') {
    return 'no';
  }

  const number = Number(expression);
  let result = 'yes';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = 'no';
      break;
    }
  }
  return result;
};

export default () => {
  runGame(gameDescription, gameQuestion, gameAnswer);
};
