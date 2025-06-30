const express = require('express')
const router = express.Router();
const gymController = require('../Controllers/gym');
const auth = require('../Auth/auth')

router.post('/register',gymController.register);
router.post('/login', gymController.login);
router.post('/reset-password/sendOtp', auth,gymController.sendOtp);
router.post('/reset-password/verifyOtp', auth,gymController.verifyOtp);
router.post('/reset-password',auth,gymController.resetPassword)
router.post('/logout',gymController.logout);


module.exports = router;