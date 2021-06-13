//microtasks queue and callback queue
//event loop watches over call stack and if call stack is empty it will pass the call back function into call stack from callback queque


console.log('Test start')

setTimeout(function(){
    console.log("0 sec timer")
},0)

Promise.resolve('resolved promise').then(res => {
    console.log(res)
})

console.log('Test end')