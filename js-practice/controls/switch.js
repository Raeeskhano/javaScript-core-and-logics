// switch is used to check a value against multiple cases and execute the corresponding block of code.

const day = "monday";

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("its working day, uhhhh 🧑‍💻");
    break; //break is used to exit the switch statement after executing the code block of the matched case.
  case "saturday":
    console.log("its weekend, yayyy🎉");
    break;
  case "sunday":
    console.log("its weekend, yayyy🎉");
    break;
  default:
    console.log("invalid day.");
}
