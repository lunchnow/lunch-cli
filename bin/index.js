#!/usr/bin/env node

const { prompt } = require('enquirer');
const axios = require('axios');
const program = require('commander');

const getPlaces = require("./commands/getPlaces");

program
  .option('-pl, --list_places', 'List places from API')

program
  .command('places')
  .alias('pl')
  .description('Get places from LunchnowAPI')
  .action(() => getPlaces());

// const questions = prompt([
//   {
//     type: 'input',
//     name: 'place',
//     message: 'Where do you want to go?'
//   },
//   {
//     type: 'input',
//     name: 'time',
//     message: 'When do you want to go?'
//   }
// ]);

// async function createLunchItem(data) {
//   let url = "https://webhook.site/768f279e-b5ff-485c-a2fe-8bfc38f2ff0a"
//   axios.post(url, {
//     place: 'Stara',
//     time: '13:00'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }


// async function getData() {
//   let data = await questions;

//   createLunchItem(questions)
// }

// if (program.list_places) {
//   console.log(program.opts())
// }

program.parse(process.argv);

// getData();
