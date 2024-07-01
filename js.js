'use strict';
function changeClass() {
  let val = document.getElementById('in').value;
  let piska = document.querySelector('p');
  piska.className = val;
}

function changeClass2(index) {
  let elems = document.getElementById(index);
  elems.classList.toggle('hide');
}

function clicked() {
  let elem = document.getElementById('click');
  elem.textContent = 'clicked';
  elem.style.pointerEvents = 'none';
}
