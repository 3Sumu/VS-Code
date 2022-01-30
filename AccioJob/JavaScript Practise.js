//-----------------------------------------------------
//    let fact= function (n){
//         let fac=1
//        for(let x=1;x<=n;x++)
//        {
//            fac*=x;
//        }
//        console.log(fac)
//     }

//     // let a= prompt('Enter the number : ')
//     // let num=Number(a)
//     fact(5)

//-----------------------------------------------------
//     function pallindrome(a){
//        let str=a.toLowerCase()
//         for(let index=0; index <a.length/2; index++){
//             if(str[index]!=str[a.length-1-index])
//             return false
//         }
//         return true
//     }

//    console.log (pallindrome('racEcaR'))

//------------------------------------------------------- Example: given array S = {-1 2 1 -4},and target = 1.
//The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

// function threeSum(arr, target) {
//     //your code here
//     let len=arr.length
//     let dummy=Infinity
//     for(let i=0;i<len-2;i++){
//         for(let j=i+1;j<len-1;j++){
//             for(let k=j+1;k<len;k++){
//                 let sum=arr[i]+arr[j]+arr[k]
//                 if((Math.abs(sum-target))<dummy)
//                 dummy=sum
//             }
//         }
//     }
//     return dummy
//   }
// //   let a=[-1, 2, 1, -4]
//   console.log(threeSum([-4, 5, 2, 1, 3, 4],7))

//-----------------------------------------------------Given an array of size n, find the majority element. The majority element is the element that appears more than floor(n/2) times.
// You may assume that the array is non-empty and the majority element always exist in the array. Example :
// Input : [2, 1, 2]
// Return : 2
// which occurs 2 times which is greater than 1 i.e floor(3/2).

// let array = [2, 1, 2];
// console.log(major(array, array.length));

// function major(arr, n) {
//   for(let i=0;i<n-1;i++){
//     let count=1

//       for(let j=i+1;j<n;j++){

//         if(arr[i]===arr[j]){
//             count++

//             if(count>Math.floor(n/2))
//             return arr[i]
//         }
//       }
//   }
//   return 'no max elemnt'

//   let store = {};
//   for (let i = 0; i < n; i++) {
//     if (store[arr[i]] !== undefined) store[arr[i]]++;
//     else store[arr[i]] = 1;
//     if (store[arr[i]] > Math.floor(n / 2)) return arr[i];
//   }
// }

// ----------------------------------------A common modern use is the ROT13 cipher, where the values of the letters
//  are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. Write a function which takes a ROT13 encoded string
//  as input and returns a decoded string.

// const lookup = {
//   A: "N",
//   B: "O",
//   C: "P",
//   D: "Q",
//   E: "R",
//   F: "S",
//   G: "T",
//   H: "U",
//   I: "V",
//   J: "W",
//   K: "X",
//   L: "Y",
//   M: "Z",
//   N: "A",
//   O: "B",
//   P: "C",
//   Q: "D",
//   R: "E",
//   S: "F",
//   T: "G",
//   U: "H",
//   V: "I",
//   W: "J",
//   X: "K",
//   Y: "L",
//   Z: "M",
// };

// function rot13(encodedStr) {
//   const codeArr = encodedStr.split("");
//   console.log(codeArr); // String to Array
//   let decodedArr = []; // Your Result goes here
//   // Only change code below this line
//   for (let i = 0; i < codeArr.length; i++) {
//     if (lookup[codeArr[i]] !== undefined) decodedArr[i] = lookup[codeArr[i]];
//     else decodedArr[i] = codeArr[i];
//   }
//   // Only change code above this line
//   return decodedArr.join(""); // Array to String
// }

// console.log(rot13("ABCabcD"));

// Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case. For example:
// Input - 14 output- XIV , example 2: input-798 output- DCCXCVIII

// function convertToRoman(num) {
//   const symbols = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   //your code here
//   let rom = "";

//   for (var k in symbols) {
//     if (num >= symbols[k]) {
//       let times = Math.floor(num / symbols[k]);
//       num -= times * symbols[k];
//       console.log(num);
//       rom += k.repeat(times);
//     }
//   }
//   return rom;

//   //   function val(num) {
//   //     for (var k in symbols) if (num >= symbols[k]) return k;
//   //   }

//   //   while (num > 0) {
//   //     let key = val(num);
//   //     rom += key;
//   //     num = num - symbols[key];
//   //   }
//   //   return rom;
// }

// // convertToRoman(700);
// console.log(convertToRoman(798));
// 1.

// let sumanDetails = {
//   name: {
//     firstName: "Suman",
//     lastName: "Midya",
//   },
//   isGraduated: "yes",
//   hobbies: ["Volley", "travel", "Movies"],
//   number: "",
// };

// document.getElementById("para1").innerText = JSON.stringify(sumanDetails);

// console.log(Object.values(sumanDetails));

// let details = {
//   firstName: "Suman",
//   lastName: "Midya",
//   elements: [5, 7, 14, 2, 47, 52, 16, 20, 91, 27, 83, 66, 45, 3, 22],
//   prime: function () {
//     let arr = [];
//     for (num of this.elements) {
//       //let count = 1;
//       for (let x = 2; x <= Math.floor(num / 2); x++) {
//         if (num % x === 0) {
//           //count++
//           arr.push(num);
//           break;
//         }
//         // if (count > 2) {
//         //   arr.push(num);
//         //   break;
//         //}
//       }
//     }
//     return arr;
//   },
// };

// console.log(details.prime());

// let arr = [1, 2, 3, 4];
// let arr1 = [5, 6, 7];
// let parent = [...arr, ...arr1];
// console.log(parent);

// let inputArray = [
//   { name: "Amber", batch: "Batch 12", likesIceCream: false },
//   { name: "Pratik", batch: "Batch 12", likesIceCream: true },
//   { name: "Charan", batch: "Batch 11", likesIceCream: false },
//   { name: "Dhanashree", batch: "Batch 11", likesIceCream: true },
//   { name: "Anirban", batch: "Batch 10", likesIceCream: false },
// ];

// // let student = [];
// // inputArray.forEach((ele) => {
// //   if (ele.likesIceCream && ele.batch === "Batch 11") student.push(ele.name);
// // });

// let icecream = inputArray.filter((ele) => {
//   // console.log(ele.name);
//   return ele.likesIceCream === true && ele.batch === "Batch 11";
// });

// console.log(icecream);
// console.log(icecream.map((student) => student.name));

// ******************************************

// let bankBalances = [30000, 10000, 50000, 20000, 40000];

// let newBalances = bankBalances.map((value) =>
//   String(value)[0] % 2 === 0 ? 0.2 * value + value : 0.35 * value + value
// );

// console.log(newBalances);

// ******************************************
//missing ele in array
// let arr = [1, 3, 4, 2, 0];
// let max = Math.max(...arr);
// let sum = 0;
// for (i = 1; i <= max; i++) sum += i;
// console.log(sum - arr.reduce((total, ele) => total + ele));

// let missing = () => {
//   for (i = 0; i <= Math.max(...arr); i++) {
//     if (arr.sort((a, b) => a - b)[i] !== i) return i;
//   }
// };
// console.log(missing());
// ******************************************

let students = [
  {
    name: "John",
    batch: "Batch 11",
    marks: {
      english: "38",
      maths: "72",
      science: "82",
      hindi: "21",
      social: "48",
    },
  },
  {
    name: "Sita",
    batch: "Batch 12",
    marks: {
      english: "74",
      maths: "82",
      science: "32",
      hindi: "42",
      social: "28",
    },
  },
  {
    name: "Shyam",
    batch: "Batch 13",
    marks: {
      english: "28",
      maths: "92",
      science: "63",
      hindi: "81",
      social: "61",
    },
  },
];

let sum = students.map((ele) => {
  let mark = Object.values(ele.marks);
  return mark.reduce((total, numer) => {
    return total + Number(numer);
  }, 0);
});
console.log(sum);
