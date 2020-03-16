const { prompt } = require('enquirer');
const axios = require('axios');

async function createLunchItem(data) {
  let url = "https://ec2ffc4c.ngrok.io/lunches"
  debugger;
  axios.post(url, {
    place: 'Stara',
    time: '13:00'
  })
  .then(function (response) {
    console.log(response);
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