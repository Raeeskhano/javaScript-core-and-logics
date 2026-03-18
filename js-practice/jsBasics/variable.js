const studentId = 1;
let studentEmail = "raees@gmail.com";
var studentCity = "abbottabad";
studentPassword = 12345678;
let studentStatus; //undefined

//investigation

// studentId = 2; // cannot update the constant.
studentEmail = "khan@khan.com";
studentCity = "islamabad";
studentPassword = 87654321;

//do not use var because of issues in block scope and function scope.

console.log(studentId);

console.table([studentEmail, studentCity, studentPassword, studentStatus]);
