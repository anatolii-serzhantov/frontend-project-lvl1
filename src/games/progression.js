import runEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'What number is missing in the progression?';

const createProgression = (firstNumber, increaseNumber, progressionLength) => {
  let currentNumber = firstNumber;
  const progression = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(currentNumber);
    currentNumber += increaseNumber;
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(0, 30);
  const increaseNumber = getRandomNumber(0, 10);
  const progressionLength = 10;
  const answerIndex = getRandomNumber(0, progressionLength);
  const progression = createProgression(firstNumber, increaseNumber, progressionLength);
  const answer = progression.splice(answerIndex, 1, '..');
  return [progression.join(' '), String(answer)];
};

export default () => {
  runEngine(gameDescription, getQuestionAndAnswer);
};
