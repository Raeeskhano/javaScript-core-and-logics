function setUserName(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  setUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const me = new createUser("Raees", "rk@gmail.com", "1234");

console.log(me);
