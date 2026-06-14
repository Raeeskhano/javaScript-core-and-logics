// document.getElementById("pic1").onclick = function () {
//   alert("hello miss");
// };

// document.getElementById("pic2").addEventListener(
//   "click",
//   function (e) {
//     console.log(e);
//   },
//   false,
// );

//type
//timestamp
//defaultPrevented
//target, toElement
//src Element
//currentTarget
//clientX, ClientY, ScreenX, screenY
//altkey
//ctrkey, shiftkey, keycode

// document.getElementById("images").addEventListener(
//   "click",
//   function () {
//     console.log("clicked inside ul");
//   },
//   false,
// );

// document.getElementById("pic1").addEventListener(
//   "click",
//   function (e) {
//     console.log("pic one clicked");
//     e.stopPropagation(); //it stop theevent to bubble.
//   },
//   false,
// );

// document.getElementById("google").addEventListener(
//   "click",
//   (e) => {
//     console.log("google jsut clicked");
//     e.preventDefault();
//     e.stopPropagation();
//   },
//   false,
// );

document.querySelector("#images").addEventListener("click", (e) => {
  console.log(e.target.parentNode);
  if (e.target.tagName === "IMG") {
    let RemoveIt = e.target.parentNode;
    RemoveIt.remove();
  }
});
