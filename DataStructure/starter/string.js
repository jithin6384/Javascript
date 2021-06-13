const plane = "Air GoAir SpiceGet";
plane[1]
plane.slice(0)
// "GoAir"
plane.slice(0, 1)
// "G"
// 0 is the begining and 1 is the end 1 - 0 will be the size of element returned
//Index of first appearance of r
console.log(plane.indexOf('i'))
//Index of last appearance of r

console.log(plane.lastIndexOf('i'))
console.log(plane.indexOf('GoAir'))
console.log(plane.indexOf('SpiceGet'))
console.log(plane.lastIndexOf('SpiceGet'))

console.log(plane.slice(4,5))

console.log(plane.slice(0))
console.log(plane.slice(0,5))

//we can extract character upto space 

console.log(plane.slice(0, plane.indexOf(' ')))
console.log(plane.slice(0, plane.lastIndexOf(' ')))

console.log(plane.slice(4,-2))

const checkSeat = function(seat){
  const s = seat.slice(-1)
  if(s == 'B' || s == 'E')
  	console.log('you got middle seat')
  else
  	console.log('you got lucky')
}

checkSeat('11B')
checkSeat('22C')
checkSeat('23E')


// more string methods  lecture 121

let name = "Jithin"
console.log(name.toUpperCase())
// console.log(name.toUppercase)

console.log(name.toLowerCase())

name = "JiThin"

console.log(name[0].toUpperCase() + name.slice(1).toLowerCase())

const loginEmail = " Jithin@example.com"
console.log(loginEmail.toLowerCase().trim());

//replacing in string similar to gsub in ruby 

const priceGB = '250,675E'
const priceUS = priceGB.replace('E','$').replace(',','.')
console.log(priceUS)

const anouncement = "All passenger come to boarding door, please come to boarding door!"
// console.log(anouncement.replaceAll('door', 'gate'))
//regular expression
console.log(anouncement.replace(/door/g, 'gate'))


//string methods including replace are case sensitive


//booleans

console.log(plane.includes('Go'))
console.log(plane.includes('sss'))
console.log(plane.startsWith('Air'))
console.log(plane.endsWith('t'))
 

 //split method same as ruby 

 console.log(('ght grhe grrr').split(" "))


//join method also same as ruby


console.log(('ght grhe grrr').split(" ").join("+"))
const fullName = "jithin raghunathan"

const capitalizeName = function(name){
let fullNameArr = []
   for(let word of name.split(" ")) {
      // word =  word[0].toUpperCase() + word.slice(1)
      // word.replace(word[0], word[0].toUpperCase())
      fullNameArr.push(word.replace(word[0], word[0].toUpperCase()))
   }
  return fullNameArr.join(" ")
}

console.log(capitalizeName(fullName))






















