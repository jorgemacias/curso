var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/userController');
/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

/// User ROUTES ///

// GET catalog home page.
router.get('/', user_controller.user_list);

// GET request for creating a User. NOTE This must come before routes that display User (uses id).
router.get('/user/create', user_controller.user_create_get);

// POST request for creating User.
router.post('/user/create', user_controller.user_create_post);

// GET request to delete User.
router.get('/user/:id/delete', user_controller.user_delete_get);

// POST request to delete User.
router.post('/user/:id/delete', user_controller.user_delete_post);

// GET request to update User.
router.get('/user/:id/update', user_controller.user_update_get);

// POST request to update User.
router.post('/user/:id/update', user_controller.user_update_post);

// GET request for one User.
router.get('/user/:id', user_controller.user_detail);

// GET request for list of all User items.
//router.get('/users', user_controller.user_list);


module.exports = router;
