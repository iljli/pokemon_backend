var express = require('express');
var router = express.Router();

const cors = require("cors");

router.use(cors()); //Allowing cors for all origins

const {
  list_detail,
  list_single_pokemon,
  list_all_pokeon,
} = require("../controllers/controllers");

router.get('/', list_all_pokeon);
router.get('/:id', list_single_pokemon);
router.get('/:id/:info', list_detail);


module.exports = router;
