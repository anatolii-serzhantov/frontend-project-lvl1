#!/usr/bin/env node
import engine from '../src/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const gameQuestion = () => {
  const randomNumberOne = Math.floor(Math.random() * 100);
  const randomNumberTwo = Math.floor(Math.random() * 100);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  return question;
};

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const chekingAnswer = (expression) => {
  const numbers = expression.split(' ');
  // eslint-disable-next-line radix
  const firstNumber = parseInt(numbers[0]);
  // eslint-disable-next-line radix
  const secondNumber = parseInt(numbers[1]);
  const result = gcd(firstNumber, secondNumber);
  return result.toString();
};

engine(gameDescription, gameQuestion, chekingAnswer);
