const jsonData = require('../pokedex.json');
require("../database/client");

const list_detail = async (req, res, next) => {
  const pokemonID = req.params.id;
  const pokemonInfo = req.params.info;
  console.log(`Parameter: ${pokemonID}`)
  console.log(`Info: ${pokemonInfo}`)
  
  const foundSubObject = jsonData.filter(jsonObj => jsonObj['id'] == pokemonID)['0'][pokemonInfo];
  console.log(foundSubObject);

  try {
    res.json(foundSubObject);
    
  }
  catch (err) {
    res.status(500).send(err);
  }
}


const list_single_pokemon = async (req, res, next) => {
  const pokemonID = req.params.id;
  console.log(`Parameter: ${pokemonID}`)

  try {
    res.json(jsonData.filter(jsonObj => jsonObj['id'] == pokemonID));
  }
  catch (err) {
    res.status(500).send(err);
  }
}


const list_all_pokeon = async function (req, res, next) {
  console.log("List all Pokemon...");

  try {
    res.json(jsonData);
  }
  catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
    list_detail,
    list_single_pokemon,
    list_all_pokeon,
};