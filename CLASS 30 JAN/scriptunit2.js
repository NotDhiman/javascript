// // // // synchronous programming means each step waits for the previous one to finish
// // // // javascript is a synchronous programming language by default
// // // // it is a single threaded language, meaning it can only do one thing at a time
// // // // asynchronous programming allows multiple things to happen at the same time. by running them in the background
// // // // javascript can be made asynchronous using callbacks, promises, and async/await
// // // // eg of synchronous programming
// // // console.log("firstline")
// // // console.log("secondline")
// // // // eg of asynchronous programming
// // // console.log("firstline")
// // // setTimeout(()=>{
// // //     console.log("thirdline")
// // // },2000)
// // // console.log("secondline")
// // // // handelling asynchronous operations using callbacks
// // // // setTimeout(()=>{
// // // //     alert("This is an alert after 3 seconds")
// // // // },3000)
// // // // It is a one time function. It executes only once after the specified time interval.
// // // const intervalId = setInterval(()=>{
// // //     console.log("This message is displayed every 1 seconds")
// // // },1000)
// // // // It is a repeated function. It executes repeatedly at the specified time interval.
// // // // to stop the setInterval function, we can use clearInterval method
// // // // real life eg is a clock that updates every second
// // // setTimeout(()=>{
// // //     clearInterval(intervalId)
// // //     console.log("Interval cleared after 10 seconds")
// // // },10000)    
// // // // clearInterval is used to stop the setInterval function from executing further
// // // let count=1
// // // const intervalId2=setInterval(()=>{
// // //     console.log(count++)
// // //     if(count>10){
// // //         clearInterval(intervalId2)
// // //         console.log("Count reached 10, interval cleared")
// // //     }},1000)
// //     // lecture 1st feb #11
// //     // callback functions are functions that are passed as arguments to 
// //     // other functions and are executed after some operation is completed
// //     // callstack is a data structure that keeps track of function calls in a program
// //     // when a function is called, it is added to the callstack
// //     // when the function finishes executing, it is removed from the callstack
// //     // it follows LIFO (last in first out) principle
// //     // essa function jo kisi or funtion mai pass on kiya jaaye callback function hota hai
// //     function print(name){   
// //     console.log("Hello Students ",name)
// //     }
// //      function greet(num)
// //         {console.log("Welcome to the class")
// //             setTimeout(() => { console.log("inside settimeout")
// //                 let firstname="Pranav"
// //                 num(firstname)
// //           },2000) 
// //         }
// //      greet(print) 
// //     //  callback hell is a situation where multiple nested callbacks make the code difficult to read and maintain  
// //     // // eg of callback hell
// //     // console.log("starting homework...")
// //     // setTimeout(() => {
// //     //     console.log("Homework done");
// //     //     console.log("Starting Dinner...")
// //     //     setTimeout(() => {
// //     //         console.log("Dinner done");
// //     //         console.log("Getting reay to go out...")
// //     //         setTimeout(() => {
// //     //             console.log("going to the playground!");
// //     //         }, 1000);
// //     //     }, 1500);
// //     // }, 2000);

// //     function finishHomework(callback){
// //         console.log("starting homework...")
// //         setTimeout(() => {
// //             console.log("Homework done");
// //             callback()
// //         }, 2000);
// //     }   
// //     function eatDinner(callback){
// //         console.log("Starting Dinner...")
// //         setTimeout(() => {
// //             console.log("Dinner done");
// //             callback()
// //         }, 2000);
// //     }
// //     function goPlayground(){
// //         console.log("Going to the playground!")
// //     }
// //      finishHomework(() => {
// //         eatDinner(() => {
// //             goPlayground();
// //         })                      
// //      });
// //     //  creating and removing elements
// //     const input=document.querySelector("#task")
// //     const button=document.querySelector("#btn")
// //     const list=document.querySelector(".list")
// //     button.addEventListener("click",(e)=>{
// //         e.preventDefault() // to prevent form submission
// //         if(input.value===""){
// //             alert("Please enter a task")
// //             return
// //         }
// //         const li=document.createElement("li")
// //          const deleteButton=document.createElement("button")
// //         deleteButton.innerText="Delete"
// //         li.innerText=input.value
// //         li.appendChild(deleteButton)
// //         list.appendChild(li)
// //         deleteButton.addEventListener("click",()=>{
// //             list.removeChild(li)
// //         })
// //         input.value="" })// to clear the input field after adding the task    
// // promises are used to handle asynchronous operations in a more elegant way than callbacks
// // a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// // a promise can be in one of three states: pending, fulfilled, or rejected
// //  const promise=new Promise(function(resolve,reject){
// //     resolve("Promise fulfilled successfully")

// //  })
// //  const promise2=new Promise(function(resolve,reject){
// //     reject("Promise rejected with an error")
// //  })
// //  const promise3=new Promise(function(resolve,reject){
// //     setTimeout(()=>{
// //         resolve("Promise fulfilled after 2 seconds")
// //     },2000) })
// //  resolve is a function that is called when the promise is fulfilled successfully
// //  reject is a function that is called when the promise is rejected with an error
// const p=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let done=false;
//         if(done){
//             resolve( {name:"Pranav",age:18} )
//         }else{
//             reject("network error")}
//         },5000)
//     })
// p.then((message)=>{console.log("Promise fulfilled successfully",message)
// }).catch((error)=>{console.log("Promise rejected with an error",error)
// }).finally(()=>{console.log("finally block")})
function doHomework(subject){
    const p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let done=true;
            if(done){
                resolve("Homework completed successfully")
            }else{
                reject("Homework failed to complete")
            }
        },2000)
    }
)
return p      
}   
function eatDinner(){
    const p=new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            let done=true;
            if(done){
                console.log("Dinner completed successfully")
                resolve("Dinner completed successfully")
            }else{
                console.log("Dinner failed to complete")
                reject("Dinner failed to complete")
            }
        },2000)
    })
    return p
}
   function goplayground(){
    const p=new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            let done=true;
            if(done){
                console.log("Going to the playground!")
                resolve("Going to the playground!")
            }else{
                console.log("Failed to go to the playground")
                reject("Failed to go to the playground")
            }
        },2000)
    })
    return p
}
doHomework().then((data)=>{
    console.log( data);
    return eatDinner();
}).then((data)=>{
    console.log( data);
    return goplayground();
}).then((data)=>{
    console.log( data);
}).catch((error)=>{
    console.error( error);
})
.finally(()=>{
    console.log("Go to sleep")
})
