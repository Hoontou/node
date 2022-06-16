'use strict';

const users = {
  id: ['tst1', 'tst2', 'tst3'],
  psword: ['1234', '5678', '1357'],
};

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
          msg: '로그인 성공',
        });
      }
    }
    return res.json({
      success: false,
      msg: '로그인 실패',
    });
  },
};

module.exports = { output, process };
