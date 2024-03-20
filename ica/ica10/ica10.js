const button1 = document.querySelector(".button1");
button1.addEventListener('click', changeText);

//const button2 = document.querySelector("#button2");
const button2 = document.getElementById("button2");
button2.addEventListener('click', changeItem);

const heading = document.querySelector("h1")
const buttonColor = document.getElementById("button2");

function changeText() {
    const head = prompt("tell me as secert");
    heading.textContent = head;
}
function changeItem() {
    const head = prompt("change color");
    buttonColor.style.backgroundColor = head;

}