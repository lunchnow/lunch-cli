const axios = require("axios");

const places = async function() {
  try {
    const response = await axios.get(`${apiUrl}/places`)
    const places = response.data.places;
    return places;
  } catch (error) {
    console.log(error)
  }
};

module.exports = places;
