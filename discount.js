function discount(ticketQuantity) {
    let oneTenPrice = 30;
    let secondTenPrice = 20;
    let threeTenPrice = 10;

    if (ticketQuantity <= 10) {
        let ticketPrice = oneTenPrice * ticketQuantity;
        return ticketPrice;
    }
    else if (ticketQuantity <= 20) {
        let oneTenTicketPrice = 10 * oneTenPrice;
        let second = ticketQuantity - 10;
        let secondTicket = secondTenPrice * second;
        let secondPrice = oneTenTicketPrice + secondTicket;
        return secondPrice;
    }
    else {
        let oneTenTicketPrice = 10 * oneTenPrice;
        let secondTicketPrice = 10 * secondTenPrice;
        let three = ticketQuantity - 20;
        let threeTicketPrice = three * threeTenPrice;
        let threePrice = oneTenTicketPrice + secondTicketPrice + threeTicketPrice;
        return threePrice;
    }
}
let result = discount(25);
// console.log(result);

var student = { name: "Yo Mama", age: 17 };
console.log(delete student.age)
console.log(student)