/* 5. [10 punktów] Stwórz aplikację która pobierze z GitHuba informacje o użytkowniku i jego repozytoriach. Dodatkowo sprawdź aktualną pogodę w lokalizacji użytkownika.

- w parametrach uruchomienia jest podawany login użytkownika oraz opcjonalnie informacja czy wyświetlać liczbę śledzących użytkownika, sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem).
- wyświetl nazwę użytkownika (name)
- wyświetl liczbę śledzących użytkownika (followers) - tylko jeżeli użyto odpowiedniego parametru przy uruchomieniu aplikacji
- wyświetl liczbę repozytoriów
- wyświetl nazwy repozytoriów (name)
- wyświetl opis pogody (weather.main, weather.description) w lokalizacji użytkownika (location - zwraca GitHub w danych użytkownika)
- żądania do API wysyłaj asynchronicznie
- pamiętaj o obsłudze błędów
- podziel rozwiązanie na moduły
- Lista endpointów API:

dane użytkownika: https://api.github.com/users/{userName}
np https://api.github.com/users/octocat
repozytoria użytkownika: https://api.github.com/users/{username}/repos
np https://api.github.com/users/octocat/repos
pogoda: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q={name}
np https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=Białystok
*/

const axios = require('axios');
const yargs = require('yargs');

const { getUserInfo, getUserRepos } = require('./exam5-github.js');
const { getUserWeather } = require('./exam5-weather.js');

const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const displayUserInfo = async () => {
	try {
		const { name, followers, location } = await getUserInfo(argv.user);
		if (argv.followers) {
			console.log(
				`User ${name} has ${followers} followers and is located in ${location}`
			);
		} else {
			console.log(`User ${name} is located in ${location}`);
		}
		const repos = await getUserRepos(argv.user);
		console.log(`Number of repos: ${repos.length}`);
		console.log(`Repos: ${repos.map((repo) => repo.name)}`);

		const weather = await getUserWeather(argv.user);
		console.log(
			`Weather in ${location}: ${weather.weather[0].main}, ${weather.weather[0].description}`
		);
	} catch (error) {
		console.log(`Couldn't get user info for ${argv.user}:`, error.message);
	}
};

displayUserInfo();
