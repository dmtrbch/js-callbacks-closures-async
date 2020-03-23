// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


function createFunction() {
	return () => console.log('hello');
}

const hello = createFunction();
hello();
// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// function1();



function createFunctionPrinter(input) {
	return () => console.log(input);
}


// UNCOMMENT THESE TO TEST YOUR WORK!
 const printSample = createFunctionPrinter('sample');
 printSample();
 const printHello = createFunctionPrinter('hello');
 printHello();



function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

 willCounter(); // 1
 willCounter(); // 2
 willCounter(); // 3

 jasCounter(); // 1
 willCounter(); // 4



function addByX(x) {
	return number => number + x;
}

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(1));

// now call addByTwo with an input of 2
console.log(addByTwo(2));


//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
	let counter = 0;
  let firstInit = 0;
  return (number) => {
    counter++;
    if(counter <= 1) {
      firstInit = func(number);
      return firstInit;
    } else return firstInit;
	}
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
 console.log(onceFunc(4));  //should log 6
 console.log(onceFunc(10));  //should log 6
 console.log(onceFunc(9001));  //should log 6


function after(count, func) {
  count--;
	return () => {
    if(count == 0) return func()
    else count--;
  }
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

 afterCalled(); // -> nothing is printed
 afterCalled(); // -> nothing is printed
 afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
	setTimeout(() => {
    func();
  }, wait);
}


function rollCall(names) {
  let index = 0;
  return () => {
    delay(() => {
      if(names[index] == undefined) console.log('Everyone accounted for');
      else console.log(names[index]);
      index++;
    }, 1000);
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
 const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
 rollCaller() // -> Should log 'Victoria'
 rollCaller() // -> Should log 'Juan'
 rollCaller() // -> Should log 'Ruth'
 rollCaller() // -> Should log 'Everyone accounted for'

