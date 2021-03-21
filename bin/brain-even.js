#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askingUserName from './src/cli.js';

const isEven = (number) => ((number % 2 === 0));
const askingUserAnswer = () => {
    const userAnswer = readlineSync.question('Your answer: ');
    return userAnswer;
};

console.log('Welcome to the Brain Games!');
const userName = askingUserName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = askingUserAnswer();
    const verifiedAnswer = (isEven(randomNumber)) ? 'yes' : 'no';
    if (userAnswer === verifiedAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${verifiedAnswer}'
                    Let's try again, ${userName}!`);
        break;
    }
    if (i === 2) {
        console.log(`Congratulations ${userName}!`);
    }
};