#!/usr/bin/env node
const randomNumberOne = Math.floor(Math.random() * 100);
const randomNumberTwo = Math.floor(Math.random() * 100);
const operations = ['+', '-', '*'];
const randomOperation = operations[Math.floor(Math.random() * operations.length)];
const verifiedAnswer = () => {
    let result = 0;
    switch (randomOperation) {
        case '+':
            result = randomNumberOne + randomNumberTwo;
            break;
        case '-':
            result = randomNumberOne - randomNumberTwo;
            break;
        case '*':
            result = randomNumberOne * randomNumberTwo;
            break;
        default:
            result = '';
    }
    return result;
};

const gameDescription = 'What is the result of the expression?';
console.log(gameDescription);
const gameQuestion = `${randomNumberOne} ${randomOperation} ${randomNumberTwo}`;
console.log(`Question: ${gameQuestion}`);
console.log(verifiedAnswer());