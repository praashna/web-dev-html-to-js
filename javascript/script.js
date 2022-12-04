// // variable
// var username = 'prashna';
// // to change 'overwrite'
// username = 'asim'

// console.log(username);

// let myfavnum = 100;
// console.log(typeof myfavnum);

// let isHeAProgrammer = true; //camel case
// console.log(isHeAProgrammer);

// let active_user = null;
// console.log(active_user);

//bigInt datatype
// let bigI = BigInt(1);
// let anotherB = BigInt(2);
// console.log(bigI + anotherB);

// Object
const user = {
    firstName : 'prashna',
    lastName :  'adhikari',
    email :     'user@gmail.com',
    sendEmail :  function(){
        console.log('Email was not sent to' + this.firstName+ this.lastName);
    }
};
 user.sendEmail();

 const admin={
     adminId : 12,
     adminName : 'pra',
     adm : function(){
         console.log('admin name is' + this.adminName);

     }
 };
  admin.adm();

  