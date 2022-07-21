// // 1-Task 1- masala
// var users = {
//   "Akmal": {
//     name: "Akmal",
//     surname: "O'ktamov",
//     age: 27,
//     salary: 800
//   },
  
//   "Oybek": {
//     name: "Oybek",
//     surname: "sattorov",
//     age: 36,
//     salary: 1500
//   },
  
//   "Umid": {
//     name: "Umid",
//     surname: "Abdushukurov",
//     age: 21,
//     salary: 400
//   },

// };



// function sumSalary(object) {
  
//   var result = 0;
//   for (const key in object) {
//     var item = object[key];
    
//     result += item.salary ; 
//   }
  
//   return result;
// }

// console.log(sumSalary(users));

// // 1-Task 2- masala
// function avarageAge(object) {
  
//   var ageSumm = 0;
//   for (const key in object) {
//     var item = object[key];
    
//     ageSumm += item.age;
//   }
//   var numberOfItems = Object.values(object).length;
//   var result = ageSumm / numberOfItems;
  
//   return result;
// }



// console.log(avarageAge(users));