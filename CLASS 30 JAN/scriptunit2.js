// synchronous programming means each step waits for the previous one to finish
// javascript is a synchronous programming language by default
// it is a single threaded language, meaning it can only do one thing at a time
// asynchronous programming allows multiple things to happen at the same time. by running them in the background
// javascript can be made asynchronous using callbacks, promises, and async/await
// eg of synchronous programming
console.log("firstline")
console.log("secondline")
// eg of asynchronous programming
console.log("firstline")
setTimeout(()=>{
    console.log("thirdline")
},2000)
console.log("secondline")
// handelling asynchronous operations using callbacks
// setTimeout(()=>{
//     alert("This is an alert after 3 seconds")
// },3000)
// It is a one time function. It executes only once after the specified time interval.
const intervalId = setInterval(()=>{
    console.log("This message is displayed every 2 seconds")
},1000)
// It is a repeated function. It executes repeatedly at the specified time interval.
// to stop the setInterval function, we can use clearInterval method
// real life eg is a clock that updates every second
setTimeout(()=>{
    clearInterval(intervalId)
    console.log("Interval cleared after 10 seconds")
},10000)    
// clearInterval is used to stop the setInterval function from executing further