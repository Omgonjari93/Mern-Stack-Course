//1. Promise.resolve() Returns a promise that is resolved with a given value


    Promise.resolve(42).then((value) => {
      console.log(value); // 42
    });
 
//2. Promise.reject() Returns a promise that is rejected with a given reason.    
   
     Promise.reject("Error occurred").catch((err) => {
      console.log(err); // Error occurred
     });

//3. Promise.all() Takes an array of promises and resolves when all promises resolve
//                 If any promise rejects, the whole thing rejects..    

        Promise.all([Promise.resolve(1), Promise.resolve(2)])
       .then(values => console.log(values)); // [1, 2]

//4. Promise.race() Resolves or rejects as soon as the first promise settles (either resolves or rejects).

         Promise.race([
   new Promise(resolve => setTimeout(() => resolve("Fast"), 100)),
   new Promise(resolve => setTimeout(() => resolve("Slow"), 500))
   ]).then(result => console.log(result)); // "Fast"

//5. Promise.allSettled() Waits for all promises to settle, then returns an ar
//                        ray of their results (whether resolved or rejected).

[
  { status: "fulfilled", value: 1 },
  { status: "rejected", reason: "Fail" }
]