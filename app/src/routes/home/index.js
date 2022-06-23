'use strict';

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.output.home);

router.get('/login', ctrl.output.login);

router.post('/login', ctrl.process.login);

router.get('/register', ctrl.output.register);
router.post('/register', ctrl.process.register);

//2. /로그인으로 온 post req를 ctrl procces login 를 이용해서 처리후 res로 반환

module.exports = router;
