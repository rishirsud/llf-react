const router = require('express').Router();

const {
  searchAllProfile,
  searchPSN,
  searchXbox,
  searchSteam,
  searchNintendo,
  searchBlizzard
} = require('../../controllers/search-controller');

router
  .route("/all")
  .get(searchAllProfile);

router
  .route("/psn")
  .get(searchPSN);

router
  .route("/xbox")
  .get(searchXbox);

router
  .route("/steam")
  .get(searchSteam);

router
  .route("/nintendo")
  .get(searchNintendo);

router
  .route("/blizzard")
  .get(searchBlizzard);

module.exports = router;