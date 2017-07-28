//question 1

const arr1 = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5]; // should log 8,2,4,8,2,4,8,4
const arr2 = [15,26,74,12,3,6,9,1,2,5]; // should log 26,74,12,6,2

var evenNumbers = []; // made this to hold the even numbers 
 function even(arr) { //my function 
    for (var i = 0; i < arr.length; i++) {  
      if ((arr[i] % 2) === 0) {
        evenNumbers.push(arr[i])
      }    
    }    
}
even(arr2);
console.log(evenNumbers);


// question 2


function maxnum(ray) { //my function 
    var largestNumber = ray[0]; //initalize the 1st variable 
  for (var m = 1; m < ray.length; m++) { //starting my loop from 1
    if (ray[m] > largestNumber) { //capture highest number
      largestNumber = ray[m];
    }
  } 
  return largestNumber      //trying this retun
}
console.log(maxnum([15,26,74,12,3,6,9,1,2,5])); //output in console.log
//this function is not dynamic unlike the first one, I am trying differnt ways of using loops.


//question 3


function printInteger(number) {  
   var answer = '';// initialize an empty string that the values will be sent to
    for(i=1; i <= number; i++) {// loop from 1 up to that number
    //for each of the loop, another loop will now run from 1 up to the current number
    // been looped i.e i and print i each time
    // this is my attempt at a nested loop
    for(j = 1; j <= i; j++) {
      if(i > 1) { // this adds the value     
        answer += ', '; // ensure that a comma is not added at the beginning
      }
      answer += i;
    }
  }
  console.log(answer);
}

printInteger(5);
//this function is dynamic as you can put any value in here now 


//question 4


function printIntegerTriangle(number) { //my new function to print the triangle
  var answer = ''; // initialize an empty string that the values will be sent to 
  // loop from 1 up to that number
    for(i=1; i <= number; i++) {
      for(j = 1; j <= i; j++) {
      answer += i;
    }   
    answer += '\n'; //this cool trick will add a new line every time a value is returned
  }
  console.log(answer); 
}

printIntegerTriangle(5);
//this function is also dynamic


//I attempted to indent my script, hope its readable.
