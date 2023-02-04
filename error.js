function sum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'no is number'
    }
    return num1 + num2;
}
console.log(sum('5', 10))