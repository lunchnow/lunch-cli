const axios = require('axios')
const chalk = require('chalk');

const apiUrl = "https://swapi.co/api/people";

module.exports = function() {
  axios.get("https://swapi.co/api/people/1").then(response => {
    let { name } = response.data
    console.log(chalk.blue.bold(name))
  })
};
