// async/await
// async/await is a syntactic sugar over promises that makes asynchronous code look and behave like synchronous code
function orderFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("Food ordered")
            resolve("food ordered")
        },1000)
    })
}
function prepareFood(){ 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Food prepared")
            resolve("preparedFood")
        },1000)
    })
}   
function foodDelivered(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Food delivered")
            resolve("food delivered")
        },1000)
    })
} 
async function order(){
 const data=await orderFood();
 console.log(data);
await prepareFood();
await foodDelivered();}
console.log(order())
// orderFood().then((data)=>{
//     console.log(data)
//     return prepareFood();
// }).then((data)=>{
//     console.log(data)
//     return foodDelivered();
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.error(error)
// })
// if we add async before the function declaration, it will return a promise and we can use await to wait for the promise to resolve before moving on to the next line of code.
// to fetch data of resolve we add constdata=await orderFood(); and to fetch data of reject we can use try catch block