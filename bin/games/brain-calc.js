#!/usr/bin/env node
import engine from '../src/index.js'

const gameDescription = 'What is the result of the expression?'
const gameQuestion = () => {
  const randomNumberOne = Math.floor(Math.random() * 100)
  const randomNumberTwo = Math.floor(Math.random() * 100)
  const operations = ['+', '-', '*']
  const randomOperation = operations[Math.floor(Math.random() * operations.length)]
  const question = `${randomNumberOne} ${randomOperation} ${randomNumberTwo}`
  return question
}

const chekingAnswer = (expression) => {
  return eval(expression).toString()
}

engine(gameDescription, gameQuestion, chekingAnswer)
