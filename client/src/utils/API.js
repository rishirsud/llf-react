import axios from 'axios';


export const getUserProfile = () => {
  return axios.get('/profile');
};

export const register = userData => {
  return axios.post('/register', userData);
};

export const login = userData => {
  return axios.post('/login', userData);
};

export const updateProfile = userData => {
  return axios.put('/update/', userData);
};

export default {
  getUserProfile,
  register,
  login,
  updateProfile
}


// user-routes.js code copied for ref

// const {
//   register,
//   login,
//   getUserProfile,
//   updateProfile
// } = require('../../controllers/user-controller.js');

// // const withAuth = require('../../middleware/authentication');

// // GET user profile '/api/user/profile'
// router
//   .route('/profile')
//   .get( withAuth, getUserProfile);

// // POST register user

// // http://localhost:3000/api/user/register
// router
//   .route('/register')
//   .post(register);

// // POST login user
// // http://localhost:3000/api/user/login
// router
//   .route('/login')
//   .post(login);


// //update user profile
// router
//   .route("/update/")
//   .put(withAuth, updateProfile)


// module.exports = router;
