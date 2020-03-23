// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
 //console.log(addTwo(3));
 //console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + 's';
}

// uncomment these to check your work
 //console.log(addS('pizza'));
 //console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	let mutatedArray = [];
  for(let i = 0; i < array.length; i++) {
    mutatedArray.push(callback(array[i]));
  }
  return mutatedArray;
}

 //console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	for(let i = 0; i < array.length; i++){
    callback(array[i]);
  }
}

// see for yourself if your forEach works!
//forEach([2, 3, 5], item => console.log(item));

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  let mutatedArray = [];
	forEach(array, item => {
    mutatedArray.push(callback(item));
  });
  return mutatedArray;
}

//console.log(mapWith([1, 2, 3], addTwo));
//Extension 2
function reduce(array, callback, initialValue) {
	let accumulator = initialValue;
  forEach(array, item => {
    accumulator = callback(accumulator, item);
  });
  return accumulator;
}

//const add = (a, b) => a+b;
//const result = reduce([1, 2, 3], add, 0);
//console.log(result);
//Extension 3
function intersection(...arrays) {
  	let helperArray = [];
		let mutatedArray = reduce(arrays, (firstArray, secondArray) => {
      if(!firstArray.length) {
        firstArray = secondArray;
        return firstArray;
      } else {
        forEach(secondArray, item => {
        	if((firstArray.indexOf(item) > -1) && (helperArray.indexOf(item) == -1)) {
          	helperArray.push(item);
        	}
      	});
        return helperArray;
      }
    }, []);
  	return mutatedArray;
}

//console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
	
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
	let projection = {};
  forEach(arrVals, function(item){
    projection[item] = [];
    forEach(arrCallbacks, function(func) {
      projection[item].push(func(item));
    })
  });
  return projection;
}

//console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
function objectFilter(obj, callback) {
  let projection = {};
	for(let key in obj) {
    if(callback(key, obj[key])) {
      projection[key] = obj[key];
    }
  }
  return projection;
}

const compare = (itemOne, itemTwo) => {
  return itemOne.toUpperCase() == itemTwo;
}

 const cities = {
 London: 'LONDON',
 LA: 'Los Angeles',
 Paris: 'PARIS',
 };
console.log(objectFilter(cities, compare));
// Should log { London: 'LONDON', Paris: 'PARIS'}

//https://reklama5.mk/AdDetails?ad=3478849