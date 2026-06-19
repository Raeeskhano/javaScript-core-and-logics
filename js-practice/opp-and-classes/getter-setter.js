class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return `${this._password}raees`;
  }

  set password(value) {
    this._password = value;
  }
}

const user1 = new user("rk@amazon.com", "abc");
console.log(user1.password);
