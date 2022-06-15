'use strict';
console.log('hello');

const id = document.querySelector('#id'),
  psword = document.querySelector('#psword'),
  loginBtn = document.querySelector('button');

const login = () => {
  const req = {
    id: id.value,
    psword: psword.value,
  };
};

console.log(id);
loginBtn.addEventListener('click', login);
