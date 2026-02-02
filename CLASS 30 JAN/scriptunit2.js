// // synchronous programming means each step waits for the previous one to finish
// // javascript is a synchronous programming language by default
// // it is a single threaded language, meaning it can only do one thing at a time
// // asynchronous programming allows multiple things to happen at the same time. by running them in the background
// // javascript can be made asynchronous using callbacks, promises, and async/await
// // eg of synchronous programming
// console.log("firstline")
// console.log("secondline")
// // eg of asynchronous programming
// console.log("firstline")
// setTimeout(()=>{
//     console.log("thirdline")
// },2000)
// console.log("secondline")
// // handelling asynchronous operations using callbacks
// // setTimeout(()=>{
// //     alert("This is an alert after 3 seconds")
// // },3000)
// // It is a one time function. It executes only once after the specified time interval.
// const intervalId = setInterval(()=>{
//     console.log("This message is displayed every 1 seconds")
// },1000)
// // It is a repeated function. It executes repeatedly at the specified time interval.
// // to stop the setInterval function, we can use clearInterval method
// // real life eg is a clock that updates every second
// setTimeout(()=>{
//     clearInterval(intervalId)
//     console.log("Interval cleared after 10 seconds")
// },10000)    
// // clearInterval is used to stop the setInterval function from executing further
// let count=1
// const intervalId2=setInterval(()=>{
//     console.log(count++)
//     if(count>10){
//         clearInterval(intervalId2)
//         console.log("Count reached 10, interval cleared")
//     }},1000)
    // lecture 1st feb #11
    // callback functions are functions that are passed as arguments to 
    // other functions and are executed after some operation is completed
    // callstack is a data structure that keeps track of function calls in a program
    // when a function is called, it is added to the callstack
    // when the function finishes executing, it is removed from the callstack
    // it follows LIFO (last in first out) principle
    // essa function jo kisi or funtion mai pass on kiya jaaye callback function hota hai
    function print(name){   
    console.log("Hello Students ",name)
    }
     function greet(num)
        {console.log("Welcome to the class")
            setTimeout(() => { console.log("inside settimeout")
                let firstname="Pranav"
                num(firstname)
          },2000) 
        }
     greet(print) 
    //  callback hell is a situation where multiple nested callbacks make the code difficult to read and maintain  
    // // eg of callback hell
    // console.log("starting homework...")
    // setTimeout(() => {
    //     console.log("Homework done");
    //     console.log("Starting Dinner...")
    //     setTimeout(() => {
    //         console.log("Dinner done");
    //         console.log("Getting reay to go out...")
    //         setTimeout(() => {
    //             console.log("going to the playground!");
    //         }, 1000);
    //     }, 1500);
    // }, 2000);

    function finishHomework(callback){
        console.log("starting homework...")
        setTimeout(() => {
            console.log("Homework done");
            callback()
        }, 2000);
    }   
    function eatDinner(callback){
        console.log("Starting Dinner...")
        setTimeout(() => {
            console.log("Dinner done");
            callback()
        }, 2000);
    }
    function goPlayground(){
        console.log("Going to the playground!")
    }
     finishHomework(() => {
        eatDinner(() => {
            goPlayground();
        })                      
     });