myfunction()


console.log(a)
var a = 10
console.log(a)

console.log(b)
let b = 90
console.log(b)

function myfunction(){
      try {
        console.log("1 Hello Normal Function")
    } catch (error) {
        console.log(error)
    }
}

 
const callFunction = () => {
    try {
        console.log("2 Hello Arrow Function")
    } catch (error) {
        console.log(error)
    }
}
callFunction()