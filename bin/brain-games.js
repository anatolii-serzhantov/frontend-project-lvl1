#!/usr/bin/env node
import { askingUserName } from './src/cli.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello ${askingUserName()}!`);
