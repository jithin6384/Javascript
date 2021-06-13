// function expression

// let calcAge1 = function(birthyear){
// 	return 2020 - birthyear;
// }


// console.log(calcAge1(1989));

// let calcAge2 = birthyear => 2020 - birthyear;


// let yearsUntilRetirement = (birthyear, firstname) => {

// 	let yearslefttoretire =  (65 - calcAge2(birthyear));
//     return ` ${yearslefttoretire} years  are left for ${firstname} to retire `
// }
// console.log(yearsUntilRetirement(1989, 'john'))


//function calling other functions

// function cutFruitPieces(fruit){
// 	return fruit * 4 ;

// }

//arrow functions

// cutFruitPieces = (fruit,pieces) => fruit * pieces;


// function fruitprocessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples,4);
//     const orangePieces = cutFruitPieces(oranges,3);

//     return `juices made by ${applePieces} apple pieces and ${orangePieces} orange pieces`
// }


// console.log(fruitprocessor(4, 5))



// let calcAverage = (score1,score2,score3) => (score1 + score2 + score3)/3

// function checkWinner(){
// 	const avgKoalas = calcAverage(6, 5, 4)
// 	const avgDolphins = calcAverage(44, 54, 45)
// 	if(avgKoalas > avgDolphins && (avgKoalas/2 >= avgDolphins)){
// 		console.log(`koalas win by ${avgKoalas} vs ${avgDolphins}`)
// 	}
// 	else if (avgDolphins > avgKoalas && (avgDolphins/2 >= avgKoalas)){
// 		console.log(`Dolhpins win by ${avgDolphins} vs ${avgKoalas}`)
// 	}
// 	else{
// 		console.log("no Team wins")
// 	}
// }

// checkWinner();


// const arr = ['john', 'smith', 'jane']
// // add element
// const name = arr.push('jim')
// console.log(name)
// console.log(arr)
// const firstname = arr.unshift('jonas')
// console.log(firstname)
// console.log(arr)
// // remove element
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)
// console.log(arr.indexOf('smith'))

// console.log(arr.includes('smith'))


// function calcTip(bill){
//    const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20
//    return tip;
// }

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// console.log(tips)
// console.log([bills[0] + tips[0], bills[1] + tips[1], bills[2]+ tips[2]])

// jonas = {
// 	firstname: 'jonas',
// 	lastname: 'Schemntmann',
// 	birthyear: 1991,
// 	job: 'teacher',
// 	friends: ['Michael', 'peter', 'Steven'],
// 	hasDriversLicence: true,
// 	calcAge: function(){
// 		this.age = 2037 - this.birthyear;
// 		return this.age
// 	},
// 	getSummary: function(){
// 		let v1 = `${this.firstname} is ${this.calcAge()} years old and  `
//         let v2 = this.hasDriversLicence ? 'has a drivers licences ' : 'does not have a drivers licences'
//         return v1 + v2 ;
// 	}
// }

// console.log(jonas.calcAge())

// console.log(jonas.getSummary())

// mark = {
// 	fullName: 'Mark Miller',
// 	mass: 78,
// 	height: 1.69,
// 	calcBmi: function(){
// 	  this.bmi = this.mass/(this.height ** 2) ;
// 	  return this.bmi;
// 	}
// }

// john = {
// 	fullName: 'John Smith',
// 	mass: 92,
// 	height: 1.95
// }

// john.calcBmi = mark.calcBmi;

// john.calcBmi() > mark.calcBmi() ? console.log(`${john.fullname}'s BMI ${john.bmi} is higher than ${mark.fullname}'s BMI ${mark.bmi}`) : console.log(`${mark.fullname}'s BMI ${mark.bmi} is higher than ${john.fullname}'s BMI ${john.bmi}`)





// ${mark.fullname}




//challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]



// let tips = [];
// let total = [];

// calcTip = function(bill){
// 	return  (50 <= bill && bill <= 300) ? bill * .15 : bill * .20
// }

// for(let i = 0; i < bills.length; i++){
// 	tips[i] = calcTip(bills[i]); 
// 	total[i] = tips[i] + bills[i];
// }
// console.log(tips, total)



// function avergagearr(arr){
// 	let sum = 0
// 	for(let i  = 0; i < arr.length ; i ++ ){
//         sum += arr[i];
// 	}
// 	return sum/arr.length
// }

// console.log(avergagearr(bills))
// console.log(avergagearr(tips))



function printforecast(arr){
	let str = "..."
	for(let i = 0; i < arr.length; i ++){
		
		str += `${arr[i]} o c in ${i + 1} days ...`
	}
	console.log(str)
}
let sampleData1 = [17,21,23]
printforecast(sampleData1)




































































































