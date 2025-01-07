// const numbers = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8, 1];

// const res = numbers.filter((item, index) => numbers.indexOf(item) !== index);

// console.log(res);

// const duplicate = (arr) => {
//   let result = [];
//   let hash = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!hash[arr[i]]) {
//       hash[arr[i]] = true;
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log(duplicate(numbers));

// function memoize(fn) {
//   let cache = {};
//   let callCount = 0;

//   function memoized(...args) {
//     let cachekey = JSON.strigify(args);
//     if (cache[cachekey] !== undifined) {
//       return cache[cachekey];
//     } else {
//       callCount++;
//       cache[cachekey] = fn(...args);
//       return cache[cachekey];
//     }
//   }
//   memoized.getCallCount = function () {
//     return callCount;
//   };

//   return momoized;
// }

//  find maximum num of  array

function maximum(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}


let arr = [5, 10, 15, 20, 25];
console.log(maximum(arr));