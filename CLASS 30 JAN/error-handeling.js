// console.log("first line")
// try{
//     // console.log(sample)
//     let age=15
//     if(age<18){
//         throw new Error("Access Denied")
//     }
// }catch(error){
//     console.error(error)
// }finally{
//     console.log("This will always execute")
// }
// console.log("second line")
// // console.error is used to show the error in red color
// // console.warn is used to show the warning in yellow color
// // console.info is used to show the information in blue color
// // console.debug is used to show the debug information in gray color
// // try...catch is used to handle run time error 
// // it prevents the program from crashing and allows us to handle the error gracefully
// // catch receives the error object as a parameter and we can use it to get more information about the error
// // finally block is used to execute the code that should run regardless of whether an error occurred or not
// // commonly used with async/await
// // throw is used to throw an error manually and it can be caught using try...catch block
async function getData(){
  try{ const response=await fetch("https://dummyjson.com/products")
    console.log(response.ok)
    if(response.ok==false){
        throw new Error("Nhi Mila Data")
    }
    const data=await response.json()
    console.log(data)}
   catch(error){
    console.log(error)
}}
getData()