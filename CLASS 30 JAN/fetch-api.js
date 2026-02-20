// it is alone is a promise, without Await, it will return a promise, and we can use .then() to handle the response
// response.json() is also a promise, so we need to use await to get the data
// get request is used to get the data from the server, and it is the default method of fetch API
// post request is used to send the data to the server, and we need to specify the method and the body of the request
async function sendData(){
    try{
        const response = await fetch("https://dummyjson.com/products/add",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            title:"macbook",
            description:"Apple MacBook Pro 16-inch",
            price:100000,
            discountPercentage:10,
            rating:4.5,
            stock:50,  
            brand:"Apple",})
        })
        const data=await response.json()
        console.log(data)}
        catch(error){
            console.log("data Not found ")
        }}
        sendData()
