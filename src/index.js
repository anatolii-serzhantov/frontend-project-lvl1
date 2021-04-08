import readLineSync from 'readline-sync';

const roundsCount = 3;

const gameEngine = (showDescription, askQuestion, checkAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(showDescription);
  for (let i = 0; i < roundsCount; i += 1) {
    const askedQuestion = askQuestion();
    console.log(`Question: ${askedQuestion}`);
    const answer = readLineSync.question('Your answer: ');
    const checkedAnswer = checkAnswer(askedQuestion);
    if (answer === checkedAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkedAnswer}'.
            Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameEngine;
