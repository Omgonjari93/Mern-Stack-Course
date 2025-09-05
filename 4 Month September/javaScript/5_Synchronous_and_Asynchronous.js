//Synchronous 

console.log(1)
console.log(2)
console.log(3)


//Asynchronous


console.log("Start")
setTimeout(()=> {
console.log("Second")
}, 1000)
console.log("Last")

// 1. Callbacks

function myFunction(newFunction){
    console.log("Callback Example")
    newFunction()
}

function secondFunction(){
    console.log("Callback function get call")
}
myFunction(secondFunction)

//2. async/await

const getData = async () => {
    try {
        const userData = await User.find()
    } catch (error) {
        console.log(error)
    }
}


//3. Promises