let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let number4 = document.getElementById('number4');
let number5 = document.getElementById('number5');
let number6 = document.getElementById('number6');
let number7 = document.getElementById('number7');
let number8 = document.getElementById('number8');

let counter1=0;
const interval1 = setInterval(() => {
  if (counter1 === 95) {
    clearInterval(interval1);
  } else {
    counter1 += 1;
    number1.innerHTML = counter1 + '%';
  }
}, 15);

let counter2=0
const interval2 = setInterval(() => {
  if (counter2 === 60) {
    clearInterval(interval2);
  } else {
    counter2 += 1;
    number2.innerHTML = counter2 + '%';
  }
}, 20);

let counter3=0;
const interval50 = setInterval(() => {
  if (counter3 === 75) {
    clearInterval(interval50);
  } else {
    counter3 += 1;
    number3.innerHTML = counter3 + '%';
  }
}, 20);

let counter4=0;
const interval4 = setInterval(() => {
  if (counter4 === 55) {
    clearInterval(interval4);
  } else {
    counter4 += 1;
    number4.innerHTML = counter4 + '%';
  }
}, 20);


let counter5=0;
const interval5 = setInterval(() => {
  if (counter5 === 75) {
    clearInterval(interval5);
  } else {
    counter5 += 1;
    number5.innerHTML = counter5 + '%';
  }
}, 20);

let counter6=0;
const interval6 = setInterval(() => {
  if (counter6 === 45) {
    clearInterval(interval6);
  } else {
    counter6 += 1;
    number6.innerHTML = counter6 + '%';
  }
}, 20);

let counter7=0;
const interval7 = setInterval(() => {
  if (counter7 === 75) {
    clearInterval(interval7);
  } else {
    counter7 += 1;
    number7.innerHTML = counter7 + '%';
  }
}, 20);

let counter8=0;
const interval8 = setInterval(() => {
    if (counter8 === 75) {
      clearInterval(interval8);
    } else {
      counter8 += 1;
      number8.innerHTML = counter8 + '%';
    }
  }, 20);