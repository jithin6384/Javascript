'use strict';

const PersonProto = {
    calcAge: function () {
       console.log(2037 - this.birthyear)
    },

    init: function (birthYear, firstName) {
      this.birthYear = birthYear;
      this.firstName = firstName;  
    }
}

const steven = Object.create(PersonProto)
console.log(steven)
console.log(steven.__proto__)

steven.firstName = "Steven";
steven.birthYear = 1977;