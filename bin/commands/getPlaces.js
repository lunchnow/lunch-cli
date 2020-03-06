const axios = require('axios')
const chalk = require('chalk');
const fetch = require('node-fetch');

// const apiUrl;

module.exports = function() {
  fetch("https://946aa1f3.ngrok.io/places")
    .then(response => response.json())
    .then(json => {

      let places = json.places;
      json.places.forEach((element, _index) => {
        console.log(element)
      });
    }).catch(error => console.log(error))
};
