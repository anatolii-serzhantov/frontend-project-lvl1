#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { gameDescription, gameQuestion, gameAnswer } from '../src/games/gcd.js';

gameEngine(gameDescription, gameQuestion, gameAnswer);
