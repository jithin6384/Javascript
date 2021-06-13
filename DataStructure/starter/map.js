//maps are similar to objects 
//maps have data stored in key value pair but unlike object keys can be any type like number, boolean or even maps

//lets create a map for resturrant 
const rest = new Map();

//set method is used to set values to map

rest.set('name', "Randal")
rest.set(1, 'Kannur, Kerala')
rest.set('categories', ['chilli paneer', 'noodles', 'juice', 'non veg'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are Open')
.set(false, 'We are Close')

// console.log(rest)


//get method is used to get certain values

// console.log(rest.get('categories'))

const time = 21;
const isOpen = (time > rest.get('open') && time < rest.get('close'))

// console.log(rest.get(isOpen));

//delete and clear are same as set

//iteration in maps

const question = new Map([
     ['question', 'which is the best programming langauge?'],
     [1, 'C'],
     [2, 'Java'],
     [3, 'JavaScript'],
      ['correct', 3],
      [true, 'correct'],
      [false, 'Try Again']


	])
console.log(question.get('question'))

for (const [key, value]  of question.entries()){
	if(typeof key === 'number' ){
	console.log( key , value)
}
}
const answer = Number(prompt("Enter the answer"))

console.log(answer)
console.log(question.get(answer === question.get('correct')))


















