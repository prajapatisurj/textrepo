// Description: Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

let arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr);
console.log(arr);
// binary sort

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// find string in the array
let str = [
  "apple",
  "elderberry",
  3,
  "banana",
  "cherry",
  "date",
  5,
  "banana",
  "cherry",
  "date",
  6,
];

let res = str.filter((str) => typeof str == "number");

console.log(res);

const obj = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 25,
  },
  {
    name: "Bob",
    age: 28,
  },
  {
    name: "Alice",
    age: 32,
  },
];

const result = obj.reduce((acc, it) => {
  return acc + it.age;
}, 0);

console.log(result);




// find the longest string in an array
let st = [
  "apple",
  "elderberry",
  "banana",
  "cherry",
  "date",
  5,
  "banana",
  "cherry",
  "date",
  6,
];

let longestStr = st.reduce((longest, current) => {

  if (current.length > longest.length) {
    return current;
  } else {
    return longest;
  }
}, st[0]);

console.log(longestStr)




