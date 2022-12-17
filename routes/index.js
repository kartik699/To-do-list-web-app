const express = require('express');
const router = express.Router();

// getting actions in homeController js file
const homeController = require('../controllers/home_controller');

// defining routes and actions for them
router.get('/', homeController.home);
router.post('/add-task', homeController.add);
router.get('/toggle-task', homeController.toggle);
router.get('/delete-task', homeController.delete);


module.exports = router;