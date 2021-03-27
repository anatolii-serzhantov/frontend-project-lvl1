#!/usr/bin/env node
import engine from '../src/index.js'

const gameDescription = 'What number is missing in the progression?'
const gameQuestion = () => {
  const firstNumber = Math.floor(Math.random() * 30)
  const increaseNumber = Math.floor(Math.random() * 10)

  const createProgression = (start, add) => {
    const progression = []
    progression.push(start)
    let number = start
    for (let i = 0; i < 9; i += 1) {
      number += add
      progression.push(number)
    }

    const randomNumber = Math.floor(Math.random() * progression.length)
    const firstPart = progression.slice(0, randomNumber)
    const secondPart = progression.slice(randomNumber + 1)
    const hidenNumber = '..'
    const result = []
    result.push(firstPart)
    result.push(hidenNumber)
    result.push(secondPart)
    const finalProgression = `${result.flat().join(' ')}`
    return finalProgression
  }

  return createProgression(firstNumber, increaseNumber)
}

const chekingAnswer = (expression) => {
  const array = expression.split(' ').map(Number)
  for (let i = 0; i < array.length; i += 1) {
    if (isNaN(array[i])) {
      if (array[i - 1] && array[i + 1]) {
        return (array[i - 1] + ((array[i + 1] - array[i - 1]) / 2)).toString()
      }
      if (i === array.length - 1) {
        return (array[i - 1] + ((array[i - 1] - array[i - 2]))).toString()
      }
      if (i === 0) {
        return (array[i + 1] - ((array[i + 2] - array[i + 1]))).toString()
      }
    } else {
      continue
    }
  }
}

engine(gameDescription, gameQuestion, chekingAnswer)
