import readlineSync from 'readline-sync';

export const askingUserName = () => {
  const userName = readlineSync.question('May I have your name?: ');
  return userName;
};

export const askingUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};