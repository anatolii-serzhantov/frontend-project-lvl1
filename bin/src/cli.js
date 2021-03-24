import readlineSync from 'readline-sync';

export const askingUserName = () => {
  const name = readlineSync.question('May I have your name?: ');
  return name;
};

export const askingUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};