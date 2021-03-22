#!/usr/bin/env node
import { askingUserName, askingUserAnswer } from './cli.js';

console.log('Welcome to the Brain Games!');
export const userName = askingUserName();
console.log(`Hello, ${userName}!`);