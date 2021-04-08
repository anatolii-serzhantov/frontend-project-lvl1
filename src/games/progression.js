import gameEngine from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const gameQuestion = () => {
  const rangeOfFirstNumber = 30;
  const firstNumber = Math.floor(Math.random() * rangeOfFirstNumber);
  const incrementStep = 10;
  const increaseNumber = Math.floor(Math.random() * incrementStep);

  const createProgression = (start, add) => {
    const fullPogression = [];
    fullPogression.push(start);
    let number = start;
    for (let i = 0; i < 9; i += 1) {
      number += add;
      fullPogression.push(number);
    }

    const randomNumber = Math.floor(Math.random() * fullPogression.length);
    const firstPartOfProgression = fullPogression.slice(0, randomNumber);
    const secondPartOfProgression = fullPogression.slice(randomNumber + 1);
    const hatchCharacter = '..';
    const unitedProgression = [];
    unitedProgression.push(firstPartOfProgression);
    unitedProgression.push(hatchCharacter);
    unitedProgression.push(secondPartOfProgression);
    const progressionWithShadedElement = `${unitedProgression.flat().join(' ')}`;
    return progressionWithShadedElement;
  };

  return createProgression(firstNumber, increaseNumber);
};

// eslint-disable-next-line consistent-return
const gameAnswer = (expression) => {
  const array = expression.split(' ').map(Number);
  for (let i = 0; i < array.length; i += 1) {
    if (Number.isNaN(array[i])) {
      if (array[i - 1] && array[i + 1]) {
        return String(array[i - 1] + ((array[i + 1] - array[i - 1]) / 2));
      }
      if (i === array.length - 1) {
        return String(array[i - 1] + ((array[i - 1] - array[i - 2])));
      }
      if (i === 0) {
        return String((array[i + 1] - ((array[i + 2] - array[i + 1]))));
      }
    }
  }
};

export default () => {
  gameEngine(gameDescription, gameQuestion, gameAnswer);
};
