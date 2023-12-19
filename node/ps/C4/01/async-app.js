/*Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki axios i pobierzmy użytkownika dane wykorzystując składnię async/await. */
const yargs = require("yargs");
const axios = require("axios");

const userId = yargs.argv.id;

if (typeof userId !== "number" || userId < 0 || userId % 1 !== 0) {
  console.log("Parametr userId musi byc liczbą dodatnią całkowitą.");
  process.exit(1);
}

const getUser = async (userId) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const response = await axios.get(url);
  return response.data;
};

const getWeather = async (lat, lng) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;

  const response = await axios.get(url);
  return response.data;
};

(async (userId) => {
  try {
    const user = await getUser(userId);
    console.log(user.name);

    const weather = await getWeather(
      user.address.geo.lat,
      user.address.geo.lng
    );
    console.log(weather.weather[0].description);
  } catch (error) {
    console.log(error.message);
  }
})(userId);
