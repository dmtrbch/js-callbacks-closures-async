/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(function() {
    console.log('welcome');
  }, 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
  setTimeout(function() {
    console.log('good bye');
  }, 2000);
  console.log('hello');
}
// Uncomment the following line to check your work!
 //helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
  setInterval(function() {
    console.log('hi again');
  }, 1000);
}
// Uncomment the following line to check your work!
 //brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function limitedRepeat() {
  let interval = 0;
  setInterval(function() {
    console.log('hi for now');
    interval++;
    if(interval == 5) {
      clearInterval(1);
    }
  }, 1000);
}
// Uncomment the following line to check your work!
 //limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  let stop = 0;
  setInterval(function() {
    func();
    stop +=interval;
    if(stop == duration) clearInterval(1);
  }, interval*1000)
}
// Uncomment the following lines to check your work!
 function theEnd() {
   console.log('This is the end!');
 }
 //everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */

function delayCounter(target, wait) {
	return () => {
    let displayNumber = 1;
    setInterval(function(){
    	console.log(displayNumber);
      displayNumber++;
      if(displayNumber > target) clearInterval(1);
    }, wait)
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
 const countLogger = delayCounter(3, 1000)
 countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3
