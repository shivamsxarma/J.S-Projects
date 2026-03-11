//puri ghadi mai 360 degree 
//12 hrs mai 360 deg
//1hr = 360/12 = 30 deg

// 1 min mai 6 deg
// 1 sec mai 6 deg

let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function dispplayTime(){
let date = new Date();
// getting hour , mins , secs from date;
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();

let hRotation = 30*hh + mm/2;
let mRotation = 6*mm;
let sRotation = 6*ss; 

hr.style.transform = `rotate(${hRotation}deg)`;
min.style.transform = `rotate(${mRotation}deg)`;
sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(dispplayTime , 1000);