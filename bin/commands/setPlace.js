const { prompt, Select } = require('enquirer');
const axios = require('axios');
const chalk = require('chalk');

async function createLunchItem(data) {
  let url = "https://ec2ffc4c.ngrok.io/lunches"
  let { place, time } = data;

  axios.post(url, {
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


const getPlaces = async function() {
  try {
    const response = await axios.get("https://ec2ffc4c.ngrok.io/places")
    const places = response.data.places;
    return places;
  } catch (error) {
    console.log(error)
  }
};

async function getData() {
  const places = await getPlaces();

  const selectInput = new Select({
    name: 'place',
    message: 'Where do you want to go?',
    choices: [...places]
  });

  const questionsInput = await prompt([
    {
      type: 'input',
      name: 'time',
      message: 'When do you want to go?'
    }
  ]);

  let place = selectInput.run();
  let time = questionsInput;

  const answers = {
    place: place,
    time: time
  }
  createLunchItem(answers)
}

module.exports = async () => {
  getData()
}