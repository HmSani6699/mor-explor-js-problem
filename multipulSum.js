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
console.log(output)