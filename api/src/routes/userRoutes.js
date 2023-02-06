const express = require('express');
const router = express.Router();

//router.get('/home');

const controller = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/all', controller.getAll);
router.delete('/delete/:id', controller.deleteUserById);
router.post('/login', authController.login);
router.post('/register', controller.registerUser);
router.put('/update/:id', controller.updateUserById);

module.exports = router;
