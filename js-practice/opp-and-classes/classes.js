class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}9ywq87642336t`;
  }

  capitilizer() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new user("Raees", "rk@google.com", "1235456");
console.log(user1.encryptPassword());
console.log(user1.capitilizer());

//behind the scene

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}9ywq87642336t`;
// };

// User.prototype.capitilizer = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const user1 = new User("Raees", "rk@google.com", "1235456");
// console.log(user1.encryptPassword());
// console.log(user1.capitilizer());
