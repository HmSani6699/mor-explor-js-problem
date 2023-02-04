/* 
1. Bangla--> 10
2. gonit---> 5
3. english--> 2
*/

function sumTak(bangla, gonit, english) {
    let banglaPrice = 10;
    let gonitPrice = 5;
    let englshPrice = 2;

    let banglaBook = bangla * banglaPrice;
    let gonitBook = gonit * gonitPrice;
    let englishBook = english * englshPrice;

    let totalTaka = banglaBook + gonitBook + englishBook;
    return totalTaka
}
let output = sumTak(3, 4, 1);
// console.log(output)


function total(book, pan, khat) {
    let bookPrice = 100;
    let panPrice = 10;
    let khatPrice = 20;

    let bookTk = bookPrice * book;
    let panTk = panPrice * pan;
    let khatTk = khatPrice * khat;

    let total = bookTk + panTk + khatTk;
    return total
}
let result = total(2, 3, 4);
console.log(result)