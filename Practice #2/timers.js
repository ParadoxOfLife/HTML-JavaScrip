function greeting(btnSender) {
  console.log(`Greeting dear ${btnSender.target.innerText}`);
}
let btn = document.getElementById("btn1");


let texts = ["a", "b", "c", "d", "e", "f", "g", "k","l","m"];
for (let index = 0; index < texts.length; index++) {
  document.getElementById("div").innerHTML += `<button>${texts[index]}</button>`;
}
let arrOfButtons = document.getElementsByTagName("button");
for (let index = 0; index < arrOfButtons.length; index++) {
  let btn = arrOfButtons[index];
  btn.addEventListener("click", greeting);
}


