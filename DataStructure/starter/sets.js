//sets are collection of unique elements

const arr = ['idly', 'dosa', 'roti', 'paneer', 'sprouts', 'dosa', 'idly']


// sets 
const orderset = new Set(arr);
console.log(orderset)

//we can also pass strings inside set as strings are iterable
//also we can convert set to array using spread operator
//spread operator first unpacks the element and then puts them into newly constructed array
//spread operator works on all iterables
console.log([...new Set('jithin')])

//method to get size of array

console.log(orderset.size)

//if an element is in set

console.log(orderset.has('idly'))

//add element in set

console.log(orderset.add('vegetables'))
orderset.add('junk')

console.log(orderset)

//to delete element 

orderset.delete('junk')

console.log(orderset)

//to delete all element

// orderset.clear()
// console.log(orderset)

//most important use case of 





