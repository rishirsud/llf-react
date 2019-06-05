// var express = require("express");
// const { email, password/*, firstName, lastName*/ } = req.body;

const getAllProfiles = function (req, res) {

  let db = require("../models");

  console.log("GETTING ALL PROFILES");

  db.User.find({}, {
      firstName: 1,
      location: 1,
      steam: 1,
      psn: 1,
      xbox: 1,
      /* nintendo: 1,
      blizzard: 1 */
    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      if (err) {
        console.log(err);
      }
    })
};

const searchAllProfile = function (req, res) {

  let db = require("../models");

  let search = req.query;


  console.log(searchPSN)

  console.log(`looking for all`);

  db.User.find({
      $or: [{
          psn: {
            $regex: search.psn,
            $options: "$i"
          }
        },
        {
          steam: {
            $regex: search.steam,
            $options: '$i'
          }
        },
        {
          xbox: {
            $regex: search.xbox,
            $options: '$i'
          }
        },
        /* {
          nintendo: {
            $regex: search.nintendo,
            $options: '$i'
          }
        },
        {
          blizzard: {
            $regex: search.blizzard,
            $options: '$i'
          }
        }, */
      ]
    }, {
      firstName: 1,
      location: 1,
      steam: 1,
      psn: 1,
      xbox: 1,
      /* nintendo: 1,
      blizzard: 1 */
    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      if (err) {
        console.log(err);
      }
    })
}

const searchPSN = function (req, res) {

  let db = require("../models");
  let search = req.query.psn;

  console.log(`looking for psn ${search}`);

  // console.log(req.query);

  db.User.find({
      $or: [{
        psn: {
          $regex: search,
          $options: "$i"
        }
      }]
    }, {
      firstName: 1,
      location: 1,
      psn: 1,
    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      if (err) {
        console.log(err);
      }
    })
}

const searchXbox = function (req, res) {

  let db = require("../models");
  let search = req.query.xbox;

  console.log(`looking for psn ${search}`);

  // console.log("looking for psn Bob");

  db.User.find({
      $or: [{
        xbox: {
          $regex: search,
          $options: '$i'
        }
      }]
    }, {
      firstName: 1,
      location: 1,
      xbox: 1,
    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      if (err) {
        console.log(err);
      }
    })
}

const searchSteam = function (req, res) {

  let db = require("../models");

  let search = req.query.steam;

  console.log(`looking for psn ${search}`);

  db.User.find({
      $or: [{
        steam: {
          $regex: search,
          $options: '$i'
        }
      }]
    }, {
      firstName: 1,
      location: 1,
      steam: 1,
    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      if (err) {
        console.log(err);
      }
    })
}

/* const searchNintendo = function (req, res) {

  let db = require("../models");

  let search = req.query.nintendo;

  console.log(`looking for nintendo ${search}`);

  db.User.find({
      $or: [{
        nintendo: {
          $regex: search,
          $options: '$i'
        }
      }]
    }, {
      firstName: 1,
      location: 1,
      nintendo: 1,
    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      if (err) {
        console.log(err);
      }
    })
}

const searchBlizzard = function (req, res) {

  let db = require("../models");

  let search = req.query.blizzard;

  console.log(`looking for blizzard ${search}`);

  db.User.find({
      $or: [{
        blizzard: {
          $regex: search,
          $options: '$i'
        }
      }]
    }, {
      firstName: 1,
      location: 1,
      blizzard: 1,
    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      if (err) {
        console.log(err);
      }
    })
}  */

module.exports = {
  getAllProfiles,
  searchAllProfile,
  searchPSN,
  searchXbox,
  searchSteam,
 /*  searchNintendo,
  searchBlizzard */
};