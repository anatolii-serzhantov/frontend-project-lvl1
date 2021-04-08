import readLineSync from 'readline-sync';

const runGame = (description, createQuestion, checkAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const askedQuestion = createQuestion();
    console.log(`Question: ${askedQuestion}`);
    const answer = readLineSync.question('Your answer: ');
    const correctAnswer = checkAnswer(askedQuestion);
    if (answer === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
