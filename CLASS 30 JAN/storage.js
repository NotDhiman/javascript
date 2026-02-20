// local storage is a web storage that allows us to store data in the browser with no expiration date. 
// The data will not be deleted when the browser is closed and will be available the next day, week, or year.
// local storage is a key-value pair storage, where the key is a string and the value can be a string, number, boolean, object, or array.
// let obj={
//     name:"Pranav",
//     age:18,
//     city:"Delhi"

// }

// localStorage.setItem("name","Pranav Dhiman")
// localStorage.setItem("age",18)
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))
// // local storage can only store string data, so if we want to store an object or an array,
// //  we need to convert it to a string using JSON.stringify() method and when we want to retrieve the data,
// //  we need to parse it back to an object or an array using JSON.parse() method.
// localStorage.setItem("obj",JSON.stringify(obj))
// localStorage.removeItem("age")  
// // localStorage.clear() // to clear all the data from local storage
// console.log(JSON.parse(localStorage.getItem("obj")))
// common use of local storage is to store the user data, theme preference, language preference, etc.
// session storage is similar to local storage but it is only available for the duration of the page session.
// let obj={
//     name:"Pranav",
//     age:18,
//     city:"Delhi"

// }

// sessionStorage.setItem("name","Pranav Dhiman")
// sessionStorage.setItem("age",18)
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))
// // local storage can only store string data, so if we want to store an object or an array,
// //  we need to convert it to a string using JSON.stringify() method and when we want to retrieve the data,
// //  we need to parse it back to an object or an array using JSON.parse() method.
// sessionStorage.setItem("obj",JSON.stringify(obj))
// sessionStorage.removeItem("age")  
// // sessionStorage.clear() // to clear all the data from session storage
// console.log(JSON.parse(sessionStorage.getItem("obj")))


// cookies are small pieces of data that are stored in the browser and sent to the server with every request.
document.cookie="name=Pranav Dhiman; expires=Fri, 21 feb 2026 23:59:59 UTC;"
document.cookie="age=18; expires=Fri, 21 feb 2026 23:59:59 UTC;"
console.log(document.cookie)
// cookies are also key-value pair storage, where the key is a string and the value is a string.
async function sample(){
    await fetch("http://127.0.0.1:5500/CLASS.html")
}
sample()
// IT ALSO HAVE EXPIRES ATTRIBUTE TO SET THE EXPIRATION DATE OF THE COOKIE AND PATH ATTRIBUTE TO SET THE PATH OF THE COOKIE
// ITS size is very small, around 4KB, and it is used to store the user data, session data, etc.
// it is more secure than local storage and session storage because it is sent to the server with every request and can be used for authentication and authorization purposes.