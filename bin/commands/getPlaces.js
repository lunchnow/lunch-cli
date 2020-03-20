const chalk = require('chalk');
const axios = require('axios');
const apiUrl = "http://127.0.0.1:2700"

// const apiUrl;

async function getPlaces() {
  try {
    const response = await axios.get(`${apiUrl}/places`)
    const places = response.data.places;

    places.forEach(place => {
      let color = Math.floor(Math.random()*16777215).toString(16);
      // console.log(chalk.blue(place))
      console.log(chalk.hex(color).bold(place));
    });
  } catch (error) {
    console.log(error)
  }
};

module.exports = () => {
  getPlaces()
};