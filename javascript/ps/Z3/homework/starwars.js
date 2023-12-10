/* Based on sw-films.json, sw-starships.json, sw-planets.json, and sw-people.json: (https://swapi.dev/). Use the starter file starwars.js
  1. Count sum of all starships cost from episodes 4-6
  2. Find the fastest starship you can afford having 8500000 credits
  3. Find the planet’s name with the lowest difference between the rotation period and orbital period
  4. Map all starships with crew <= 4 that were created between 10 Dec 2014 and 15 Dec 2014
  5. Create an array of people’s names from episodes 1 and 5 sorted by the diameter of the origin planet low to high */

const films = require('./sw-films.json');
const planets = require('./sw-planets.json');
const people = require('./sw-people.json');
const starships = require('./sw-starships.json');

// count sum of all starships cost from episodes 4-6

function sumAllStarshipsCostFromEpisodes(startEp, endEp) {
	const usedStarships = films
		.filter((film) => film.episode_id >= startEp && film.episode_id <= endEp)
		.map((film) => film.starships)
		.flat();
	const filteredStarships = starships.filter(findStarshipByUrl(usedStarships));
	return filteredStarships.reduce(sumStarshipsCost, 0);
}

function findStarshipByUrl(shipsArray) {
	return (starship) =>
		shipsArray.includes(starship.url) && starship.cost_in_credits !== 'unknown';
}
function sumStarshipsCost(sum, starship) {
	sum += +starship.cost_in_credits;
	return sum;
}

console.log(
	'Sum of all starships cost from episodes 4 - 6 is: ' +
		sumAllStarshipsCostFromEpisodes(4, 6)
);

// find the fastest starship you can afford having 8500000 credits

console.log(
	'Fastest ship I can get for up to 8500000 is: ' +
		getFastestShipFor(8500000).name
);

function getFastestShipFor(money) {
	const findFastestShip = starships
		.filter(
			(ship) =>
				ship.cost_in_credits !== 'unknown' &&
				ship.cost_in_credits <= money &&
				!isNaN(ship.max_atmosphering_speed.replace('km'))
		)
		.sort((a, b) => +b.max_atmosphering_speed - +a.max_atmosphering_speed)[0];
	return findFastestShip;
}

// find planet name with the lowest difference between the rotation period and orbital period

console.log(
	'Planet name with the lowest difference between the rotation period and orbital period is: ' +
		getPlanetNameWithLowestDifference('rotation_period', 'orbital_period')
);

function getPlanetNameWithLowestDifference(key1, key2) {
	let planetName;

	planetName = planets
		.filter((planet) => planet.name !== 'unknown')
		.map((planet) => ({
			name: planet.name,
			difference: Math.abs(planet[key1] - planet[key2]),
		}))
		.sort((a, b) => a.difference - b.difference)[0].name;

	return planetName;
}

// // map all starships with crew <= 4 that were created between 10 dec 2014 and 15 dec 2014

console.log(
	'Ships with max crew of 4 created between 10.12.2014 - 12.12.2014 number is: ' +
		getCrewShipFrom(4, new Date(2014, 11, 10), new Date(2014, 11, 12)).length
);

function getCrewShipFrom(maxCrew, dateStart, dateEnd) {
	const dateStartMs = new Date(dateStart).getTime();
	const dateEndMs = new Date(dateEnd).getTime();
	return starships
		.filter(getShipsFilterByCrew(maxCrew))
		.filter(getShipsFilterByCreation(dateStartMs, dateEndMs));
}

function getShipsFilterByCrew(maxCrew) {
	return (starship) => starship.crew !== 'unknown' && +starship.crew <= maxCrew;
}

function getShipsFilterByCreation(dateStartMs, dateEndMs) {
	return (starship) => {
		const createdInMs = new Date(starship.created).getTime();
		return createdInMs >= dateStartMs && createdInMs <= dateEndMs;
	};
}
// // create an array of people’s names from episodes 1 and 5 sorted by the diameter of origin planet low to high

// console.log(
// 	'People from ep 1 - 5 sorted by origin planet diameter low to high: ' +
// 		getPeopleSortedByOriginPlanetDiameter(1, 5)
// );

// function getPeopleSortedByOriginPlanetDiameter(startEp, endEp) {
// 	let people;

// 	return people;
//
