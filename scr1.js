
var arr = [-1, 10, -5, 9, 7, -66, 98, 8, -2, 4]
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const maxNumber = findMax(arr);
console.log(maxNumber);

function findMinNumber(arr) {
  let minNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }
  return minNumber;
}

const minNumb = findMinNumber(arr);
console.log(minNumb); 

function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const sump = sumOfPositiveNumbers(arr);
console.log(sump);

function sumOfNegativeNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const sumn = sumOfNegativeNumbers(arr);
console.log(sumn);

function powOfNegativeNumbers(arr) {
  let dob = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) {
      dob *= arr[i];
    }
  }
  return dob;
}

const dobn = powOfNegativeNumbers(arr);
console.log(dobn);

function countPosNeg(arr) {
  let posCount = 0;
  let negCount = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posCount++;
    } else if (arr[i] < 0) {
      negCount++;
    }
  }
  
  return {positive: posCount, negative: negCount};
}

let count = countPosNeg(arr);
console.log(count); 

var year = prompt('enter the year: ')
function isLeap(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isLeap(year));


