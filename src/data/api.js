const axios = require("axios");

const fetchWeather = async (lat, lon) => {
  try {
    const apiKey = process.env.REACT_APP_KEY_OWA;
    // const response = await axios.get(
    //   `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    // );
    
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
    console.log("damn", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchWeather;
