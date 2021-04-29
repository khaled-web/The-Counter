const counter = document.querySelector('.counter');
const addCount = document.getElementById('addCountBtn');
const lowerCount = document.getElementById('lowerCountBtn');

let count = 0;

addCount.addEventListener('click', () => {
 count++;
 counter.innerHTML = count;
 if (counter.innerHTML === '0') {
  counter.style.color = 'white';
 } else if (counter.innerHTML > '0') {
  counter.style.color = '#4caf50';
 }

 counter.animate([{
  opacity: '0.2'
 }, {
  opacity: '1.0'
 }], {
  duration: 1000,
  fill: 'forwards'
 });
});

lowerCount.addEventListener('click', () => {
 count--;
 counter.innerHTML = count;
 if (counter.innerHTML === '0') {
  counter.style.color = 'white';
 } else if (counter.innerHTML < '0') {
  counter.style.color = '#ff4646';
 }

 counter.animate([{
  opacity: '0.2'
 }, {
  opacity: '1.0'
 }], {
  duration: 1000,
  fill: 'forwards'
 });

});