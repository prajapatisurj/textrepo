// // find the highest repeated vowel in a string with
// //
// function findHighestRepeatedVowel(str) {
//   let vowels = "aeiou";
//   letult = "";

//   if (!str.match()) {
//     return "No vowels found in the string.";
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       let count = (str.match(new RegExp(str[i], "gi")) || []).length;
//       if (count > ult.length) {
//         ult = str[i];
//       }
//     }
//   }
// }


// function bubblesort(arr){
//     for(let i=0;i<arr.length;i++){
//       for(let j=0;j<arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//           let temp=arr[i]
//           arr[j]=arr[j+1]
//           arr[j+1]=temp;
//         }
//       }
//     }
//     return arr
//   }
  
//   const arr=[80,34,56,2,98,4,]
//   console.log(bubblesort(arr))






// function test(){
//     console.log(test.abc)
// }
// test()

// test.abc=5000;
// test.abc =800;
// console.log(test)


// console.log({}=={})
// console.log([]===[])
// console.log(null==undefined)
// console.log({}==={})


// let a={
//     name:'suraj'
// }

// let b={
//     ...a
// }
// b.name = 'test'

// console.log(a.name)

let a=10;
let b=new Number(10)
let c=10;
console.log(a===b)
console.log(b===c)