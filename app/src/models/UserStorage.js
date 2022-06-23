'use strict';

const fs = require('fs').promises;

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;

    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {
    return fs
      .readFile('./src/databases/users.json')
      .then((data) => {
        return this.#getUsers(data, fields);
      })
      .catch(console.error);
  }

  static getUserInfo(id) {
    return fs
      .readFile('./src/databases/users.json')
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  static async save(userInfo) {
    const users = await this.getUsers(true); //트루 면 모든 값을 가져옴
    if (users.id.includes(userInfo.id)) {
      throw '이미 존재하는 아이디임'; // 던지면 밖에서 받는다. 문자열로 던진다.
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    fs.writeFile('./src/databases/users.json', JSON.stringify(users));
    return { success: true };

    //유저스를 그냥 writeFile에 넘기면 타입에러 발생, users를 문자로 바꿔줌.
  }
}

module.exports = UserStorage;

// fs를 리턴하면 프로미스 객체가 나옴 그건 비동기적이라서 느림 -> 반환받을 애보고 await 를 걸어줘야 하고
// await를 쓰려면 걔를 감싸고있는 애한테 async를 걸어야함
