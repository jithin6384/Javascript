'use strict';

class Account {
    constructor(owner, currency, pin, movements){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = []
    }

    //creating public interfaces 

    deposit(val){
        this.movements.push(val)
    }

    withdraw(val){
        this.deposit(-val);
    }
    approveLoan(){
        return true;
    }
    requestLoan(val){
        if (this.approveLoan()){
            this.deposit(val);
            console.log(`${val} deposited`)
        }
    }
}

const acc1 = new Account('jonas', 'Euro', 1000);