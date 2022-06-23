'use strict';

const User = require('../../models/User');
const UserStorage = require('../../models/UserStorage');

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },

  register: (req, res) => {
    res.render('home/register');
  },
};

// /로그인 포스트 req으로 온 req.body를 처리한다.
const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

module.exports = { output, process };
