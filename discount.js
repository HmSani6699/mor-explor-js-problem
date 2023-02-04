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
// console.log(result)


/* -----discount item----- */

function totalTake(ticket) {
    let onePrice_1_10 = 100;
    let secondPrice_11_20 = 90;
    let theePrice_21_30 = 80;
    if (ticket <= 100) {
        let totalOnePrice = onePrice_1_10 * ticket;
        return totalOnePrice;
    }
    else if (ticket <= 200) {
        let firstTenTicketPrice = 100 * onePrice_1_10;
        let mineas = ticket - 100;
        let second = mineas * secondPrice_11_20;
        let totalSecondPrice = firstTenTicketPrice + second;
        return totalSecondPrice;
    }
    else {
        let firstTicketPrice = 100 * onePrice_1_10;
        let secondTicketPrice = 100 * secondPrice_11_20;
        let mines = ticket - 200;
        let three = mines * theePrice_21_30;
        let threeTicketPrice = firstTicketPrice + secondTicketPrice + three;
        return threeTicketPrice;
    }
}
let output = totalTake(201);
console.log(output)
