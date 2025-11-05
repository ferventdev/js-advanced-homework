"use strict";

import { XMLHttpRequest } from "w3c-xmlhttprequest";

const req = new XMLHttpRequest();
req.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
req.addEventListener("load", function () {
  const pokemonData = JSON.parse(this.responseText);
  const abilityUrl = pokemonData.abilities[0].ability.url;

  const activityReq = new XMLHttpRequest();
  activityReq.open("GET", abilityUrl);
  activityReq.addEventListener("load", function () {
    const effectEntries = JSON.parse(this.responseText)["effect_entries"];
    console.log(effectEntries.find((el) => el.language.name === "en").effect);
  });
  activityReq.send();
});

req.send();
