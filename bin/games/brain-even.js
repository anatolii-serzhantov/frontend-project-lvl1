#!/usr/bin/env node
import { askingUserAnswer } from '../src/cli.js';
import { userName } from '/Users/tolya/frontend-project-lvl1/bin/brain-games.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameQuestion = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
};
const isEven = (number) => ((number % 2 === 0));
const chekingAnswer = (number) => {
    const verifiedAnswer = isEven(number) ? 'yes' : 'no';
    return verifiedAnswer;
}

const engine = (description, question, checker) => {
    console.log(description);
    for (let i = 0; i < 3; i += 1) {
        const singleQuestion = question();
        console.log(`Question: ${singleQuestion}`);
        const answer = askingUserAnswer();
        const checkedAnswer = checker(singleQuestion);
        checker(checkedAnswer);
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
}

engine(gameDescription, gameQuestion, chekingAnswer);