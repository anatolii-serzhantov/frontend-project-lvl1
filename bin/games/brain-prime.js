#!/usr/bin/env node
import engine from '../src/index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameQuestion = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    return randomNumber.toString();
}

const chekingAnswer = (expression) => {
    const number = Number(expression)
    let result = 'yes';
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            result = 'no';
            break;
        }
    }
    return result;
}

engine(gameDescription, gameQuestion, chekingAnswer);
