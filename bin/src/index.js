#!/usr/bin/env node
import { askingUserAnswer } from './cli.js';
import { userName } from '../brain-games.js';

console.log(`Hello, ${userName}!`);

export const engine = (description, question, checker) => {
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
};