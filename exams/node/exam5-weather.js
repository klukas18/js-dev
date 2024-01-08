const axios = require('axios');
const { getUserInfo } = require('./exam5-github.js');

const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=`;

const getWeatherData = async (url) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.log(`Couldn't get weather data for ${url}:`, error.message);
	}
};

const getUserWeather = async (user) => {
	const { location } = await getUserInfo(user);
	return getWeatherData(`${WEATHER_API}${location}`);
};

module.exports = { getUserWeather };
