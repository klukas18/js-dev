// Using https://rickandmortyapi.com/api fetch all characters from episode 7.
// documentation can be found here: https://rickandmortyapi.com/documentation/#rest

// RUN npm install IN THIS FOLDER BEFORE RUNNING YOUR CODE!
// const fetch = require('node-fetch');

const API_URL = `https://rickandmortyapi.com/api/episode`;

async function getCharactersFromEpisode(episodeNumber) {
  try {
    const episodeResponse = await fetch(`${API_URL}/${episodeNumber}`);

    if (!episodeResponse.ok) {
      throw new Error("Something went wrong!");
    }

    const episodeData = await episodeResponse.json();

    const characterUrls = episodeData.characters;

    const getAllCharacters = characterUrls.map((characterUrl) =>
      fetch(characterUrl)
    );

    const allCharactersResponses = await Promise.all(getAllCharacters);

    const characterNames = await Promise.all(
      allCharactersResponses.map(async (response) => {
        const characterData = await response.json();
        return characterData.name;
      })
    );

    console.log(`Characters from episode ${episodeNumber}:`, characterNames);
  } catch (e) {
    console.log(`Error:`, error);
  }
}

getCharactersFromEpisode(7);
