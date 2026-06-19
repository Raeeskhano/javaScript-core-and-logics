class user {
  constructor(username) {
    this.username = username;
  }

  login() {
    console.log(`username: ${this.username}`);
  }

  //static abstract the internal info
  static secreteId() {
    console.log(`Secrete ID: ${Math.floor(Math.random() * 10)}`);
  }
}

const user1 = new user("raees");
console.log(user1.username);
user1.login();
// user1.secreteId(); // cannot accesible due to static
