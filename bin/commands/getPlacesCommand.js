const chalk = require('chalk');
const axios = require('axios');

const places = require('../../src/fetchers/places.js')

const apiUrl = "http://127.0.0.1:2700"

// const apiUrl;

async function getPlacesCommand() {
  let places = await places();
    places.forEach(place => {
      let color = Math.floor(Math.random()*16777215).toString(16);
      // console.log(chalk.blue(place))
      console.log(chalk.hex(color).bold(place));
  });
};

module.exports = () => {
  getPlacesCommand()
};
