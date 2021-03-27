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
  const elementsOfExpression = expression.split(' ')
  const numberOne = Number(elementsOfExpression[0])
  const numberTwo = Number(elementsOfExpression[2])
  const operator = elementsOfExpression[1]

  switch (operator) {
    case '*':
      return (numberOne * numberTwo).toString()
    case '+':
      return (numberOne + numberTwo).toString()
    case '-':
      return (numberOne - numberTwo).toString()
    default:
      return ' '
  }
}

engine(gameDescription, gameQuestion, chekingAnswer)
