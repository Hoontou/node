'use strict';

const id = document.querySelector('#id'),
  psword = document.querySelector('#psword'),
  loginBtn = document.querySelector('#button');

const login = () => {
  const req = {
    id: id.value,
    psword: psword.value,
  };

  //1.프런트에서 서버로 패치를 이용해 정보넘김. req.body에 정보를 담아 post req 보냄
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json()) //3.then으로 서버에서 온 res를 처리한다.
    .then((res) => {
      if (res.succeess) {
        location.href = '/';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error('로그인 중 에러'));
    });
};

loginBtn.addEventListener('click', login);
