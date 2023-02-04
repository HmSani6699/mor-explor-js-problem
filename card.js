let shoppingCard = [
    { name: 'apple', price: 20, quantity: 2 },
    { name: 'orange', price: 10, quantity: 4 },
    { name: 'banana', price: 5, quantity: 3 },
    { name: 'mango', price: 30, quantity: 1 },
    { name: 'grep', price: 15, quantity: 5 }
];

function sum(shoppingCard) {
    let sum = 0;
    for (let i = 0; i < shoppingCard.length; i++) {
        let element = shoppingCard[i].price * shoppingCard[i].quantity;
        sum += element
    }
    return sum;
}

let result = sum(shoppingCard);
// console.log(result);



let shoppingCard_1 = [
    { name: 'apple', price: 20, quantity: 2 },
    { name: 'orange', price: 10, quantity: 4 },
    { name: 'banana', price: 5, quantity: 3 },
    { name: 'mango', price: 30, quantity: 1 },
    { name: 'grep', price: 15, quantity: 5 }
];

function total() {
    let sum_1 = 0;
    for (let i = 0; i < shoppingCard_1.length; i++) {
        let element = shoppingCard_1[i];
        let multiply = element.price * element.quantity;
        sum_1 += multiply;
    }
    return sum_1
}
let output = total(shoppingCard_1)
console.log(output)