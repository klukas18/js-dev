const axios = require('axios');
const GITHUB_URL = `https://api.github.com/users/`;

const getUserData = async (url) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.log(`Couldn't get user data from ${url}:`, error.message);
	}
};

const getUserInfo = async (user) => getUserData(`${GITHUB_URL}${user}`);
const getUserRepos = async (user) => getUserData(`${GITHUB_URL}${user}/repos`);

module.exports = {
	getUserInfo,
	getUserRepos,
};
