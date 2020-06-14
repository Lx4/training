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
  .then((data) => {
    summoner = data;
    console.log(summoner);
  });
