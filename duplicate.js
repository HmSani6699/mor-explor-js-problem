
function duplicate(array) {
    let fresArray = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (fresArray.includes(element) === false) {
            fresArray.push(element)
        }
    }
    return fresArray
}
let number = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 8, 4, 5, 3];
let output = duplicate(number);
// console.log(output);

function duplicate(array) {
    let fresArray = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (fresArray.indexOf(element) === -1) {
            fresArray.push(element)
        }
    }
    return fresArray
}
let number_1 = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 8, 4, 5, 3];
let output_1 = duplicate(number_1);
// console.log(output_1);



/* -----Remove Duplicate item in Array------*/

let num = [1, 2, 3, 4, 5, 2, 4, 5, 1, 2, 3, 4, 5, 1, 1];
let duplicateNumber = [];
let main = []
for (let i = 0; i < num.length; i++) {
    let element = num[i];
    if (main.includes(element) === false) {
        main.push(element)
    }
    else {
        duplicateNumber.push(element)
    }
}
console.log(main, duplicateNumber)
