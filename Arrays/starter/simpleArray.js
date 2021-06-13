//Slice method 

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// console.log(arr)
//starts at 2 nd index
// const a = arr.slice(2)
// console.log(a)
// console.log(arr.slice(2))
// ends at 4th exluding the 4th index (4-2 =2 elements will be included)
// console.log(arr.slice(2,4))

// console.log(arr.slice(-2))

// console.log(arr.slice(1,-2))
//method to replicate the array
// console.log(arr.slice())
//also using the spread operator

// console.log([...arr])

//Splice method
let a = [1,2,3,4,5]

let b = a;

//deletes the element from 2nd index uptil 2nd, 3rd and 4th index --> 3,4 & 5 and replaces that with 1
b.splice(2,3,1)

// b.splice(-2)

// console.log(a)



let c = [6,5,4,3,2,1]

let d;

d = c

c.reverse()

console.log(d)
