// Create a function that returns a Promise that has
// a 50% chance of resolving, and 50% chance of rejecting,
// on resolve it should return “Now I work”
// and on reject “Now I don’t’.

function getRandomPromise() {
	const getRandomNumber = () => Math.random();

	return new Promise((resolve, reject) => {
		if (getRandomNumber() > 0.5) {
			resolve('Now I work');
		} else {
			reject("Now I don't");
		}
	});
}

getRandomPromise()
	.then((result) => console.log('I expect this to be "Now I work": ', result))
	.catch((error) => console.log('I expect this to be "Now I don\'t": ', error));
