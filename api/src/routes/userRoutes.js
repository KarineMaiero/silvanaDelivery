const express = require('express');
const router = express.Router();

//router.get('/home');

const controller = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/all', controller.getAll);
router.post('/register', controller.registerUser);
router.post('/login', authController.login);
router.put('/update/:id', controller.updateUserById);
router.delete('/delete/:id', controller.deleteUserById);

module.exports = router;
