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

const yargs = require('yargs/yargs');

const { getUserInfo, getUserRepos } = require('./exam5-github.js');
const { getUserWeather } = require('./exam5-weather.js');

const argv = yargs(process.argv.slice(2))
	.option('user', {
		describe: 'Displays GitHub username.',
		type: 'string',
		demandOption: true,
	})
	.option('followers', {
		describe: 'Shows the current number of followers of that user.',
		type: 'boolean',
		default: false,
	})
	.help()
	.alias('help', 'h').argv;

const displayUserInfo = async () => {
	try {
		const { name, followers, location } = await getUserInfo(argv.user);
		console.log(
			argv.followers && name != null && location != null
				? `User ${name} has ${followers} followers and is located in ${location}.`
				: argv.followers && name != null && location == null
				? `User ${name} has ${followers} followers and doesn't share his location.`
				: name != null && location != null
				? `User ${name} is located in ${location}.`
				: name != null && location == null
				? `User ${argv.user} name is ${name}.`
				: `Searched user ${argv.user} doesn't share his name and/or location.`
		);

		const repos = await getUserRepos(argv.user);
		console.log(`Currently ${argv.user} has ${repos.length} repositories.`);
		console.log(`Repositories: ${repos.map((repo) => repo.name).join(', ')}`);

		const weather = await getUserWeather(argv.user);
		console.log(
			location == null
				? `User ${argv.user} doesn't share his location. Weather data is unavailable.`
				: `Weather in ${location}: ${weather.weather[0].main}, ${weather.weather[0].description}`
		);
	} catch (error) {
		console.log(`Couldn't get user info for ${argv.user}:`, error.message);
	}
};

displayUserInfo();
