import readLineSync from 'readline-sync';

export default (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readLineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${userName}!`);
};
