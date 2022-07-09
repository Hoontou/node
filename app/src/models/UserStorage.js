'use strict';

const db = require('../config/db');

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE id = ?;';
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        console.log(data);
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO users(id, name, psword) VALUES(?, ?, ?);';
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;

// fs를 리턴하면 프로미스 객체가 나옴 그건 비동기적이라서 느림 -> 반환받을 애보고 await 를 걸어줘야 하고
// await를 쓰려면 걔를 감싸고있는 애한테 async를 걸어야함
