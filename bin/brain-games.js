#!/usr/bin/env node

import { askingUserName } from './src/cli.js';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = askingUserName();
  return userName;
};

export const userName = getUserName();
