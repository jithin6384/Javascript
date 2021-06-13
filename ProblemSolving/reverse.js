//1. program to reverse string


const reverseString = function(paramString){
  let arrString = [...paramString]
  let newArr = []
  // console.log([...a])
  let j = 0
  for(let i = (arrString.length -1); i >= 0; i--){
      newArr.push(arrString[i]);
  }
   return newArr.join("")
}




//2. function to split the string sentence 

const spinWords = function(sentence) {

	const arrStringSentence = sentence.split(" ")
	const newArr = []
    for (let i = 0 ; i < arrStringSentence.length; i++){
    	if(arrStringSentence[i].length > 5 ){
    		
    		 newArr.push(reverseString(arrStringSentence[i]))
    	}
    	else {
    		newArr.push(arrStringSentence[i])
    	}
    	
    }
    return newArr.join(' ')
   
}

const reverse = spinWords("Hey fellow warriors")
console.log(reverse)
