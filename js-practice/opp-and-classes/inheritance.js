class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); //super keyword will set the user name in parrent class for this Teacher class
    this.email = email;
    this.password = password;
  }

  addCourses(courseName) {
    console.log(`a new course was added by ${this.username}`);
    console.log(`${courseName}`);
  }
}

const user1 = new Teacher("Raees", "rk@teacher.com", "123545667");
user1.addCourses("Javascript");
user1.logMe();

const user2 = new User("rk", "rk@gmail.com", "67477546");
user2.logMe();
