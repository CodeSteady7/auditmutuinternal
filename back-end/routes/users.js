const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const reqAuth = require('../config/safeRoutes').reqAuth;
const userCtrl = require('../controllers/userCtrl');
// route /admin/users/

router.post('/all', reqAuth, userCtrl.all);

router.post('/edit', reqAuth, userCtrl.edit);

router.post('/check/resetpass/:id', userCtrl.checkResetpass);

router.post('/resetpass/:id', userCtrl.resetPass);

router.post('/forgotpassword', userCtrl.forgetPassword);

router.post('/register', userCtrl.register);

router.post('/confirm/:id', userCtrl.confirm);

router.post('/login', userCtrl.login);

router.post('/checkSession', reqAuth, function (req, res) {
	res.json({ success: true });
});

router.post('/logout', reqAuth, userCtrl.logout);

module.exports = router;
