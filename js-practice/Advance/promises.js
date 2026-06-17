// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
  //Do an sync task
  //
//     console.log("Aync code run");
//     resolve();
//   }, 2000);
// });

// promiseOne.then(() => {
//   console.log("promise consumed.");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("sync code 2");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("async code 2 resolved");
// });

//in promicess resolve and then are connected.

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "Raees khan", email: "rk@example.com" });
//   }, 2000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let login = false;
    if (!login) {
      resolve({ name: "Raees", email: "khan@gmail.com", password: "1234" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("the promise is either resolve or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let login = false;
    if (!login) {
      resolve({
        name: "Javascript",
        email: "khan@gmail.com",
        password: "1234",
      });
    } else {
      reject("ERROR: JavaScript went wrong");
    }
  }, 1000);
});

const consumePromise = async () => {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

consumePromise();
