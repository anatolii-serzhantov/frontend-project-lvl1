#!/usr/bin/env node
import { engine } from '../src/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const gameQuestion = () => {
    const randomNumberOne = Math.floor(Math.random() * 100);
    const randomNumberTwo = Math.floor(Math.random() * 100);
    const question = `${randomNumberOne} ${randomNumberTwo}`;
    console.log(`${question} - нечто выходящее из gameQuestion`); // тестовый вывод
    return question;
};

const chekingAnswer = (expression) => {
    console.log(`${expression} - входящее нечто в функцию chekingAnswer`); // тестовый вывод
    console.log(`${expression.split(' ')} - преобразованное мною входящее нечто в функцию chekingAnswer`); // тестовый вывод
};

engine(gameDescription, gameQuestion, chekingAnswer);
