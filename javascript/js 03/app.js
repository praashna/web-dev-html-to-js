// // //array
// const list = ['ram', 'hari', "sita"];
// // console.log(list);
// console.log(list[2]);

// //multiple datatype array
// // const data = ['a', 1, true, 3];
// // console.log(data.length);

// //insert a new item at the end
// let newlength = list.push('a', 'b');
// console.log(newlength);

// //to pop or remove the item from the list
// let removeitem = list.pop();
// console.log(removeitem);
// console.log(list);

// //to remove the first item
// let removefirst = list.shift();
// console.log(removefirst);
// console.log(list);

// let added = list.unshift('aa', 'bb');
// console.log(list);

// const list = ['ram', 'shyam'];
// const familylist = ['me', 'i'];
// let combine = [...list, ...familylist, 'other name', ...['a', "b"]];
// console.log(combine);

// // const combine = list.concat(familylist);
// // console.log(combine);

//loops in js

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// var i = 1;
// for (;;) {
//     if (i <= 10) {
//         i++;
//     }
//     console.log(i);


// do yourself for...if loop

// for....in loop
// const mydetails = {
//     firstname = 'pp,
//     lastname = 'aa'

// };
//
//
//


//for...of loop

// const list = ['ram', 'hari', "sita"];
// for (let lists of list);
// console.log(lists);

//switch case

// let myMotherTou = "english";
// switch (myMotherTou) {
//     case 'english':
//         console.log('my mother tounge english found');
//         break;
//     case "newari":
//         console.log("my motherTougne is newari");
//         break;
//     case "hindi":
//         console.log('tounfe is hindi');
//         break;
//     default:
//         console.log("lang not found");
// 


//prompt()

// let userInput = prompt('please enter your name', "prashna");
// console.log(userInput);

// let firstNumb = parseInt(prompt('get first num'));
// let secondNum = parseInt(prompt('get first num'));

// let sum = firstNumb + secondNum;
// document.write(sum);


//computed property name

//array methods

const users = [{
        username: 'ram_01',
        email: 'ram@gmail.com',
        favColor: "green",
        hasDivringLicense: true
    },
    {
        username: 'hari_01',
        email: 'hari@gmail.com',
        favColor: "red",
        hasDivringLicense: true
    },
    {
        username: 'gita_01',
        email: 'gita@gmail.com',
        favColor: "green",
        hasDivringLicense: false
    },
];
//filters
// users.filter(function(user) {
//     console.log(user.favColor);
// });

const filteredItem = users.filter(function(user) {
    return user.favColor === 'green' && user.hasDivringLicense;
});

// console.log(filteredItem);
// console.log(filteredItem[0]);

//for Each
const list = ['ram', 'hari', "sita"];
list.forEach(function(lists) {
    console.log(lists)
});