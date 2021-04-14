import runEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'What number is missing in the progression?';

const createProgression = (firstNumber, increaseNumber, progressionLength) => {
  let currentNumber = firstNumber;
  const result = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    result.push(currentNumber);
    currentNumber += increaseNumber;
  }
  return result;
};

const runGameRound = () => {
  const firstNumber = getRandomNumber(0, 30);
  const increaseNumber = getRandomNumber(0, 10);
  const progressionLength = 10;
  const answerIndex = getRandomNumber(0, progressionLength);
  const progression = createProgression(firstNumber, increaseNumber, progressionLength);
  const answer = progression[answerIndex].toString();
  progression.splice(answerIndex, 1, '..').toString();
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  runEngine(gameDescription, runGameRound);
};
