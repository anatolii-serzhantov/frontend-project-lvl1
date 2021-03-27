#!/usr/bin/env node
import engine from '../src/index.js'

const gameDescription = 'What is the result of the expression?';

const gameQuestion = () => {
  const randomNumberOne = Math.floor(Math.random() * 100);
  const randomNumberTwo = Math.floor(Math.random() * 100);
  const operations = ['+', '-', '*']
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const question = `${randomNumberOne} ${randomOperation} ${randomNumberTwo}`;
  return question;
}

const chekingAnswer = (expression) => {
  function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }

  // console.log(parse(expression)) // 4.336886679999999
  return parse(expression).toString(); // работающая старая строка
}

engine(gameDescription, gameQuestion, chekingAnswer);
