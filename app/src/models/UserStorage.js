'use strict';

class UserStorage {
  static #users = {
    // 스태틱 해주면 정적변수로 넣어줘서 외부에서 직접접근가능
    id: ['tst1', 'tst2', 'tst3'],
    psword: ['1234', '5678', '1357'],
    name: ['도훈', '나개발', '김팀장'],
  };

  //하지만 메서드로 만들어서 보내주는게 이상적임. 리듀스 써서 요청한 필드들만 내보내줌
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
