import readlineSync from 'readline-sync';

const askingUserName = () => {
  const name = readlineSync.question('May I have your name?: ');
  return name;
};

export default askingUserName;
