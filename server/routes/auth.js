const router = require('express').Router();
const getLogintAction = require('../action/auth/login.action')


router.post('/login', getLogintAction);

module.exports = router;