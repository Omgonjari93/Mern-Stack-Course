// Callbcak

function myFunction(newFunction) {
  newFunction();
  console.log("I am a function");
}

function secondFunction() {
  console.log("I am a callback function");
}

myFunction(secondFunction);

