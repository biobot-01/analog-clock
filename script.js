// Global constants
// Clock hand elements
const HOURHAND = document.querySelector('#hour');
const MINUTEHAND = document.querySelector('#minute');
const SECONDHAND = document.querySelector('#second');

// Get current local time object
let date = new Date();

console.log(date);

// Get hour, minute & second individually
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log(`Hour: ${hr} Minute: ${min} Second(s): ${sec}`);

// Calculate clock hand position's using fancy math
let hrPosition = (hr*360 / 12) + (min*(360/60) / 12);
let minPosition = (min*360 / 60) + (sec*(360/60) / 60);
let secPosition = sec*360 / 60;

// function to run the clock
function runTheClock() {
  // Add ((360/12)/3600) degrees for the hour hand
  hrPosition += (3/360);
  // Add one 60th of the degrees of the second hand ((1/60)*6)
  minPosition += (6/60);
  // Add six degrees to display one additonal second (360/60)
  secPosition += 6;
  // Plug in hour, minute & second position's into css tranform
  // property to display the current time
  HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
  MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
  SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
}

// Call runTheClock function every second
const interval = setInterval(runTheClock, 1000);