let name = 'sani';
let age = 10;
let amiVallo = true;
let address = { garam: 'pakunda', hildNo: 350, word: 1 }
// let friends = [3, 6, 7, 3, 78, 9];
function add(num1, num2) {
    return num1 + num2
}
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof amiVallo);
// console.log(typeof address);
// console.log(typeof add);


//check array 
let friends = [3, 6, 7, 3, 78, 9];
// console.log(Array.isArray(friends));

//check item in array
// console.log(friends.includes(6));

// console.log(friends.indexOf(300) !== -1);


// array concat

let first = [1, 2, 3, 4, 5];
let second = [6, 7, 8, 9, 10];
let newArray = first.concat(second);
// console.log(newArray)





/* --------Array includes---------*/

let number = [1, 2, 3, 4, 5, 6, 7, 8];
let checkItem = number.includes(9);
// console.log(checkItem)


/* ----------Array concat----------- */
let num = [1, 2, 3, 4, 5];
let num1 = [6, 7, 8, 9, 10];
let concatArray = num.concat(num1);
// console.log(concatArray)


/* ------ Array.isArray */
let name_1 = 'sani';
let friendsName = ['babu', 'sakib', 'rakib'];
let checkArray = Array.isArray(friendsName)
console.log(checkArray)


