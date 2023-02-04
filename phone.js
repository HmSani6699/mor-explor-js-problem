let allPhone = [
    { name: 'nokia', price: 3000, camera: 300 },
    { name: 'mi', price: 2500, camera: 100 },
    { name: 'iphone', price: 10000, camera: 500 },
    { name: 'realme', price: 1000, camera: 700 },
    { name: 'appo', price: 5000, camera: 400 },
];

let lowestPhone = allPhone[0]
for (let i = 0; i < allPhone.length; i++) {
    let element = allPhone[i];
    if (element.price < lowestPhone.price) {
        lowestPhone = element
    }
}
// console.log(lowestPhone)

let friends = ['sani mia Hm', 'babu Molla', 'noman', 'sahabodin'];
let bigName = '';
for (let i = 0; i < friends.length; i++) {
    let element = friends[i];
    if (element.length > bigName.length) {
        bigName = element
    }
}
// console.log(bigName)