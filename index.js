// Write your code here!
const mainElement = document.querySelector('main#main')
mainElement.remove("main");

const newHeader = document.createElement("h1");

newHeader.id = "victory";

const myName = "PhilipOsir"
newHeader.textContent = `${myName} is the champion`;
document.body.appendChild(newHeader)