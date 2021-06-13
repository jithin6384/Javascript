//lect 127

const person = {
	name: "Jithin R",
	passport: 1123445
}
const flight = 'GoAir11B'


const checkIn = function(flightNum, passenger){
	passenger.name = "Mr " + passenger.name;
	flightNum = "SpiceGet22A"
}
checkIn(flight, person)
console.log(person)
