'use strict';



class Account {
    //public method
    locale = navigator.language;
    //private method
    #movements = [];
    #pin;
    constructor(owner, currency, pin, movement){
        this.owner = owner;
        this.currency = currency;
        //protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;
    }
    
    //movements
    getMovements(){
        return this.#movements
    }

    //adding methods to withdraw or deposit
  
    deposit(val){
        this.#movements.push(val);
        return this;
    }
    withdrawal(val){
        this.deposit(-val);
        return this;
    }
    //protected method
    _approveloan(val){
      return true;
    }
    requestLoan(val){
        if(this._approveloan(val)){
            this.deposit(val);
            console.log('loan approved');
        }
        return this;
    }
  }
  
  const acc1 = new Account('Jonas', 'EUR', 1111);
  
  
  
  acc1.deposit(300);
  acc1.withdrawal(150);
  acc1.requestLoan(500)
  console.log(acc1);

  console.log(acc1.getMovements())

  //222 chaining method

  acc1.deposit(300).deposit(400).withdrawal(35).requestLoan(4000).withdrawal(400)