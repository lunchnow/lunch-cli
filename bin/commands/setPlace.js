const { prompt } = require('enquirer');
const axios = require('axios');
const chalk = require('chalk');

async function createLunchItem(data) {
  let url = "https://ec2ffc4c.ngrok.io/lunches"
  let { place, time } = data;

  axios.post(url, {
    place: place,
    time: time
  })
  .then(function (response) {

    const responseMessage = `Chcesz iść do ${place} o ${time}`;
    console.log(chalk.bold.red(responseMessage));
  })
  .catch(function (error) {
    console.log(error);
  });
}


async function getData() {
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
  let data = await questions;

  createLunchItem(data)
}

module.exports = async () => {
  getData()
}