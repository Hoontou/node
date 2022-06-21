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
};

// /로그인 포스트 req으로 온 req.body를 처리한다.
const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },

  // login: (req, res) => {
  //   const id = req.body.id,
  //     psword = req.body.psword;
  //   const users = UserStorage.getUsers('id', 'psword');
  //   //유저스토리지에게서 메서드를 이용해 필요한 정보만 받아옴

  //   //아래는 맞는지 비교과정
  //   const response = {};
  //   if (users.id.includes(id)) {
  //     const idx = users.id.indexOf(id);
  //     if (users.psword[idx] === psword) {
  //       response.success = true;
  //       return res.json(response);
  //     }
  //   }

  //   response.success = false;
  //   response.msg = '로그인실패';
  //   return res.json(response);
  //프런트로 제이슨 응답을 넘겨줌

  // const response = {};
  // if (users.id.includes(id)) {
  //   const idx = users.id.indexOf(id);
  //   if (users.psword[idx] === psword) {
  //     response.success = true;
  //     return res.json(response);
  //   }
  // }
  // response.success = false;
  // response.msg = '로그인 실패';
  // return res.json(response);
};

module.exports = { output, process };
