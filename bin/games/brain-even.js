#!/usr/bin/env node
import { askingUserAnswer, askingUserName } from '../src/cli.js';
import { userName, getUserName } from '/Users/tolya/frontend-project-lvl1/bin/brain-games.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameQuestion = Math.floor(Math.random() * 100);
const isEven = (number) => ((number % 2 === 0));
const verifiedAnswer = (isEven(gameQuestion)) ? 'yes' : 'no';

const engine = (gameDescription, gameQuestion, verifiedAnswer) => {
    console.log(gameDescription);
    for (let i = 0; i < 3; i += 1) {
        console.log(`Question: ${gameQuestion}`);
        const answer = askingUserAnswer();
        if (answer === verifiedAnswer) {
            console.log('Correct');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${verifiedAnswer}'.
            Let's try again, ${userName}!`);
            break;
        }
        if (i === 2) {
            console.log(`Congratulations, ${askingUserName()}!`);
        }
    }
}

engine(gameDescription, gameQuestion, verifiedAnswer);