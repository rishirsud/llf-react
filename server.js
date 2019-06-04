const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
var User = require("./models");
var jsonwebtoken = require("jsonwebtoken")


// set up app
const app = express();
const PORT = process.env.PORT || 3001;

// set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// set up database info
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/long-lost-friends';
mongoose.Promise = Promise;
mongoose.connect(mongoUri, {
  useNewUrlParser: true
});

// set up routes
const routes = require('./routes');

app.use(routes);





app.listen(PORT, () => console.log(`🗺️ => now listening on http://localhost:${PORT}`));