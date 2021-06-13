'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


//creating userName  for  account holder 


  const createUserName = function(acc){
    acc.forEach(function(account){
     account.username =  account.owner.toLowerCase()
       .split(' ')
       .map(function(name){
         return name[0]
     }).join("")
    })
   }

  createUserName(accounts)
  const displayMovement = function(movements){
    //passing movements array into displayMovement function
    //using Array's for each method to loop over the function
    //seting the pre existing html content to empty string
    containerMovements.innerHTML = '';
    movements.forEach(function(mov, i) {
          const type = mov > 0 ? 'deposit' : 'withdrawal'
          const html =  `<div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">${mov} €</div>
          </div>`
          containerMovements.insertAdjacentHTML('afterbegin',html);
    })
    
  }


      //  displayMovement(account1.movements)

       //calculating balance

       const calcDisplayBalance = function(movements){
        const balance = movements.reduce(function(acc, mov, i, arr){
                  return acc + mov
            },0);
            labelBalance.innerText = `${balance} €`
    }
    
    
    // calcDisplayBalance(account1.movements)


  


    //chaining method using reduce to calculate Summary
    
    const calcDisplaySummary = function(account){
      const movements = account.movements
      const interestRate = account.interestRate
      const income = movements.filter(mov => mov > 0).
                     reduce((acc, cur)=> acc + cur,0)
      labelSumIn.textContent = `${income} €`
      const out = movements.filter(mov => mov < 0).
                  reduce((cur, mov) => cur + mov,0)
      labelSumOut.textContent = `${Math.abs(out)} €`
      const interest = movements.filter(mov => mov > 0).
      map(function(mov) {
        return (mov * interestRate/100)
      }).filter(function(int){
        return int >= 1 
      })
      .reduce((acc, cur) => acc + cur,0)
      labelSumInterest.textContent = `${interest} €`     
    }

    


//lecture 156 implementing Login 


//Finding account
 const findAccount = function(username, pin){
   return  accounts.find(function(acc){
        return (acc.username == username && acc.pin == pin)
   })
  }

//display account

const displayAccount = function(account, sort = false){
  //clear fields
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
 
  //display UI & welcome message
  labelWelcome.textContent = `Welcome Back, ${account.owner.split(' ')[0]}`
  containerApp.style.opacity = 1;
  const movements = account.movements
  const mov = sort ? movements.slice().sort((a,b) => a - b) : movements
  displayMovement(mov)
  calcDisplayBalance(mov)
  calcDisplaySummary(account)
}

//Event Handler

btnLogin.addEventListener('click', function(e){
  // alert('clicked login')
  //once user enters userName and pin 
  //it should find the user with that account 
  //display the user profile or show incorrect detail 
  e.preventDefault();
  const userName = inputLoginUsername.value ;
  const pin = Number(inputLoginPin.value) ;
  const accountHolder = findAccount(userName, pin) ;
  if(accountHolder){

   displayAccount(accountHolder)
   }
  else {
     console.log('wrong credential')
   }

   //159 requesting loan
   btnLoan.addEventListener('click', function(e){
     e.preventDefault();
     const amount = Number(inputLoanAmount.value);
     if(amount > 0 && accountHolder.movements.some(mov => mov  > (amount * .10))){
         //Add movement
           accountHolder.movements.push(amount);
         //Update Ui
           displayAccount(accountHolder);
         
     }
     // clear input loan field
     inputLoanAmount.value = '';
   })
   

   //157 Implementing Transfer


   btnTransfer.addEventListener('click', function(e){
      //things to do 
     //when some enters the amount 
    //it should transfer money to that account and check if the money has been there in that account
    //then withdrawal should be shown in one account and deposit be added in other account
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const accountUser = inputTransferTo.value;
    const receiverAcc = accounts.find((acc) => acc.username == accountUser)
    let balance =  Number(labelBalance.textContent.split(' ')[0])
    if((amount > 0 && amount < balance) && receiverAcc && (receiverAcc?.username !== accountHolder.username)){
        receiverAcc.movements.push(amount);
        accountHolder.movements.push(-amount);
        inputTransferAmount.value = inputTransferTo.value = "" ;
        displayAccount(accountHolder)
    }
    
  
  })

  //implementing sort 
  let sort = false
  btnSort.addEventListener('click',function(e){
    e.preventDefault();
    sort = sort ? false : true 
    displayAccount(accountHolder,sort )
    console.log(sort)
  })

})


