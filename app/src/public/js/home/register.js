'use strict';

const id = document.querySelector('#id'),
  name = document.querySelector('#name'),
  psword = document.querySelector('#psword'),
  confirmPsword = document.querySelector('#confirm-psword'),
  registerBtn = document.querySelector('#button');
//쿼리셀렉터에서 앞에 # 붙이면 id로 불러온다는 뜻. 샾 없으면 태그로 불러온다.

const register = () => {
  if (!id.value) return alert('아이디를 입력해라');
  if (psword.value !== confirmPsword.value) {
    return alert('비밀번호 일치않음');
  }

  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };
  //1.프런트에서 서버로 패치를 이용해 정보넘김. req.body에 정보를 담아 post req 보냄
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json()) //3.then으로 서버에서 온 res를 처리한다.
    .then((res) => {
      if (res.success) {
        location.href = '/login';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error('register 중 에러'));
    });
};

registerBtn.addEventListener('click', register);
