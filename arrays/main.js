import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const animals = ["Katt", "Hund", "Fisk", "Zebra"];
console.log(animals);

const ul = document.getElementById("animals");

for (let i = 0; i < animals.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = animals[i];
  ul.appendChild(li);
}


const dittnamn = "Hannes";
console.log(dittnamn.length)

for (let index = 0; index < dittnamn.length; index++) {
  const element = dittnamn[index];
  console.log(dittnamn[index])
  const p = document.createElement("p");

  document.body.appendChild(p);
  const lastspace = dittnamn[dittnamn.length - 1];
  console.log(lastspace)
  if (dittnamn[index] == lastspace) {
    p.innerHTML = dittnamn[index];

  }
  else {
    p.innerHTML = dittnamn[index] + "&nbsp;-";
  }
}