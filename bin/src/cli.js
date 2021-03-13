import readlineSync from 'readline-sync';
const askingUserName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};

export default askingUserName;

