#!/usr/bin/env node
import engine from '../src/index.js'

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'
const gameQuestion = () => {
  const randomNumber = Math.floor(Math.random() * 100)
  return randomNumber
}
const isEven = (number) => ((number % 2 === 0))
const chekingAnswer = (number) => {
  const verifiedAnswer = isEven(number) ? 'yes' : 'no'
  return verifiedAnswer
}

engine(gameDescription, gameQuestion, chekingAnswer)
