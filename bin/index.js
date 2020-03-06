#!/usr/bin/env node

const { prompt } = require('enquirer');

const questions = prompt([
  {
    type: 'input',
    name: 'place',
    message: 'Where do you want to go?'
  },
  {
    type: 'input',
    name: 'time',
    message: 'When do you want to go?'
  }
]);

console.log(questions); // { name: 'Edward Chan', username: 'edwardmchan' }
