// Just some test to play with fetch, getting some infos from RIOT TFT APIs

// require this to use fetch with Node.js
const fetch = require("node-fetch");

const summonerName = "Lx4";

var summoner;

fetch(
  `https://euw1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${summonerName}`,
  {
    method: "GET",
    withCredentials: true,
    headers: {
      "X-Riot-Token": "RGAPI-0b18e5d5-4fb0-48d7-b8c2-0942991d94b8",
    },
  }
)
  .then((response) => response.json())
  .then((data) =>
    fetch(
      `https://europe.api.riotgames.com/tft/match/v1/matches/by-puuid/${data.puuid}/ids?count=20`,
      {
        method: "GET",
        withCredentials: true,
        headers: {
          "X-Riot-Token": "RGAPI-0b18e5d5-4fb0-48d7-b8c2-0942991d94b8",
        },
      }
    )
      .then((response) => response.json())
      .then(function (data) {
        data.forEach((element) => console.log(element));
      })
  );
