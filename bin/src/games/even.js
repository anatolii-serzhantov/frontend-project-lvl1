const isEven = (number) => ((number % 2 === 0));

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const gameQuestion = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
};

export const gameAnswer = (number) => {
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return correctAnswer;
};
