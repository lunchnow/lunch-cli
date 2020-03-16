const { prompt, Select } = require('enquirer');
const axios = require('axios');
const chalk = require('chalk');

async function createLunchItem(data) {
  let url = "https://ec2ffc4c.ngrok.io/lunches"
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