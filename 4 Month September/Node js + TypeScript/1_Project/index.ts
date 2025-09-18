//Template Literals

const userName : string = "Om Gonjari"
console.log("My name is "+ userName)
console.log(`My name is ${userName}`)


//Spread Operators
//1. Array (combine 2 array  in one array)

const firstArray : number[] = [10 , 20 , 30 , 40]
const secondArray : number[] = [51 , 52 , 53 , 54]

const finalArray = [...firstArray , ...secondArray]
console.log(finalArray,"finalArray ==: ")

// 2. Object
 
const UserDetails = {
    name : "Om",
    city : "Karad"
}
const newUserDetails = {
    mobileNo : 9393939393
}

const finalUserDetails = {
   ...UserDetails,
   ...newUserDetails
}
console.log(finalUserDetails)


//Rest Operators

// 1. Examples (The rest operator in JavaScript allows you to collect multiple elements into a single array. It uses the three-dot syntax (...), and is often used in function
//                parameters to handle an indefinite number of arguments.)

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

const result =console.log (sum(1, 2, 3, 4)); 
// This returns 10 (1 + 2 + 3 + 4)