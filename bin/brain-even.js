#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (number) => ((number % 2 === 0));
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNumber = Math.floor(Math.random() * 100);
console.log(`Question: ${randomNumber}`);
console.log(`Чётное? ${isEven(randomNumber)}`);
const askingUserAnswer = () => {
    const userAnswer = readlineSync.question('Your answer: ');
};
askingUserAnswer();

for (let i = 0; i < 2; i += 1) {
    const print = askingUserAnswer() === 'yes' ? 'cool' : 'not-cool';
    console.log(print);
}