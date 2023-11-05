import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const myBtn = document.getElementById ("btn");

function textFunction () {
  let newText = document.getElementById ("mytext");
  let myInput = document.getElementById ("textfield").value;
 
  newText.innerHTML = myInput;

}

myBtn.addEventListener ("click", textFunction);