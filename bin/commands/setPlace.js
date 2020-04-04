const { prompt, Select } = require('enquirer');
const axios = require('axios');
const chalk = require('chalk');

const places = require('../../src/fetchers/places.js');

const apiUrl = "http://127.0.0.1:2700"

async function createLunchItem(data) {
  let url = `${apiUrl}/lunches`
  let { place, time } = data;

  await axios.post(url, {
    place: place,
    time: time
  })
  .then(_response => {

    const responseMessage = `Chcesz iść do ${place} o ${time}`;
    console.log(chalk.bold.red(responseMessage));
  })
  .catch(function (error) {
    console.log(error);
  });
}

async function getData() {
  const placesResult = await places();

  const selectInput = new Select({
    name: 'place',
    message: 'Where do you want to go?',
    choices: [...placesResult]
  });

  const questionsInput = await prompt([
    {
      type: 'input',
      name: 'username',
      message: "What's your name?"
    },
    {
      type: 'input',
      name: 'time',
      message: 'When do you want to go?'
    }
  ]);

  const place = await selectInput.run();
  const questionsData = questionsInput;
  const time = questionsData.time;
  const name = questionsData.username;

  const answers = {
    place: place,
    time: time,
    username: name
  }


  process.env['LCLI_USERNAME'] = name;
  createLunchItem(answers);
}

module.exports = async () => {
  getData()
}
