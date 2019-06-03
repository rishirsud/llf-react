const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');
const pageAuth = require('../middleware/page-authentication');

router.use('/api', apiRoutes);

// router.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// router.get('/profile', pageAuth, function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/profile.html"));
// });

// router.get('/register', function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/register.html"));
// });

if (process.env.NODE_ENV === 'production') {
  router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

module.exports = router;